"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface NeuralNetworkBackgroundProps {
  nodeCount?: number;
  connectionDistance?: number;
  maxConnectionsPerNode?: number;
  nodeRadius?: number;
  lineWidth?: number;
  speed?: number;
  opacity?: number;
  glowStrength?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  intensity: number;
}

interface Layer {
  nodes: Node[];
  speedMultiplier: number;
  opacityMultiplier: number;
  sizeMultiplier: number;
  parallaxSpeed: number;
  connectionOpacity: number;
  nodeCount: number;
}

export default function NeuralNetworkBackground({
  nodeCount: propNodeCount,
  connectionDistance = 120,
  maxConnectionsPerNode = 4,
  nodeRadius = 3.5,
  lineWidth = 0.5,
  speed = 0.2,
  opacity = 0.9,
  glowStrength = 1,
}: NeuralNetworkBackgroundProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const layersRef = useRef<Layer[]>([]);
  const animationRef = useRef<number>();

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 1000], [0, -30]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultNodeCount = isMobile ? 80 : 180;
  const actualNodeCount = propNodeCount || defaultNodeCount;

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Define layered node groups for depth
    const layers: Layer[] = [
      {
        nodes: [],
        speedMultiplier: 0.3,
        opacityMultiplier: 0.3,
        sizeMultiplier: 0.6,
        parallaxSpeed: 0.3,
        connectionOpacity: 0.2,
        nodeCount: Math.floor(actualNodeCount * 0.2),
      },
      {
        nodes: [],
        speedMultiplier: 0.5,
        opacityMultiplier: 0.5,
        sizeMultiplier: 0.8,
        parallaxSpeed: 0.6,
        connectionOpacity: 0.3,
        nodeCount: Math.floor(actualNodeCount * 0.3),
      },
      {
        nodes: [],
        speedMultiplier: 0.7,
        opacityMultiplier: 0.7,
        sizeMultiplier: 1.0,
        parallaxSpeed: 0.9,
        connectionOpacity: 0.4,
        nodeCount: Math.floor(actualNodeCount * 0.3),
      },
      {
        nodes: [],
        speedMultiplier: 1.0,
        opacityMultiplier: 1.0,
        sizeMultiplier: 1.2,
        parallaxSpeed: 1.2,
        connectionOpacity: 0.5,
        nodeCount: Math.floor(actualNodeCount * 0.2),
      },
    ];

    // Initialize nodes for each layer
    layers.forEach((layer, index) => {
      const colors = index === 0 ? ["#0c4a6e", "#0369a1"] : // darker for far
                     index === 1 ? ["#0369a1", "#0ea5e9"] : // mid
                     ["#0ea5e9", "#7dd3fc", "#cffafe"]; // brighter for close

      layer.nodes = Array.from({ length: layer.nodeCount }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * speed * layer.speedMultiplier,
        vy: (Math.random() - 0.5) * speed * layer.speedMultiplier,
        radius: (nodeRadius + Math.random() * 1.5) * layer.sizeMultiplier,
        color: colors[Math.floor(Math.random() * colors.length)],
        intensity: 0.7 + Math.random() * 0.3,
      }));
    });

    layersRef.current = layers;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, actualNodeCount, speed, nodeRadius]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    ctx.scale(dpr, dpr);

    let time = 0;

    const animate = () => {
      time += 0.01;
      const currentScrollY = window.scrollY;
      const baseParallax = (currentScrollY / 1000) * 30; // Base parallax amount

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw layers from back to front for proper depth
      layersRef.current.forEach((layer, layerIndex) => {
        const layerOffset = layer.parallaxSpeed * baseParallax;

        // Update and draw nodes for this layer
        layer.nodes.forEach(node => {
          // Apply subtle drift to movement
          node.x += node.vx + Math.sin(time * 0.5 + node.x * 0.01) * 0.1;
          node.y += node.vy + Math.cos(time * 0.3 + node.y * 0.01) * 0.1;

          // Bounce off edges
          if (node.x <= 0 || node.x >= dimensions.width) node.vx *= -1;
          if (node.y <= 0 || node.y >= dimensions.height) node.vy *= -1;

          // Keep within bounds
          node.x = Math.max(node.radius, Math.min(dimensions.width - node.radius, node.x));
          node.y = Math.max(node.radius, Math.min(dimensions.height - node.radius, node.y));

          // Draw crisp node with controlled glow
          ctx.save();
          ctx.globalAlpha = opacity * node.intensity * layer.opacityMultiplier;

          // Sharp node without blur
          ctx.fillStyle = node.color;
          ctx.beginPath();
          ctx.arc(node.x, node.y - layerOffset, node.radius, 0, Math.PI * 2); // Apply parallax offset
          ctx.fill();

          // Controlled subtle glow with minimal blur
          if (glowStrength > 0) {
            ctx.shadowColor = node.color;
            ctx.shadowBlur = glowStrength * 0.5;
            ctx.beginPath();
            ctx.arc(node.x, node.y - layerOffset, node.radius * 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        });

        // Draw connections within this layer
        ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * layer.connectionOpacity})`;
        ctx.lineWidth = lineWidth;
        ctx.globalAlpha = opacity * layer.connectionOpacity;
        ctx.lineCap = 'round';

        layer.nodes.forEach((nodeA, i) => {
          let connections = 0;
          layer.nodes.slice(i + 1).forEach(nodeB => {
            if (connections >= maxConnectionsPerNode) return;
            const dx = nodeA.x - nodeB.x;
            const dy = (nodeA.y - layerOffset) - (nodeB.y - layerOffset);
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y - layerOffset);
              ctx.lineTo(nodeB.x, nodeB.y - layerOffset);
              ctx.stroke();
              connections++;
            }
          });
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, connectionDistance, maxConnectionsPerNode, lineWidth, opacity, glowStrength]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          transform: `translateY(${yOffset}px)`,
          willChange: 'transform',
        }}
      />
      {/* Light gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/10 to-slate-900/40" />
    </div>
  );
}
