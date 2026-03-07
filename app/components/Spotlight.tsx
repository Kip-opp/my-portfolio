"use client";
import { useEffect, useRef, useState } from "react";

export default function Spotlight() {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={divRef} className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity, background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.06) 40%, transparent 70%)` }} />
    </div>
  );
}
