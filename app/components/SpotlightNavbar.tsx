"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

export interface SpotlightNavbarProps {
  items?: NavItem[];
  className?: string;
  onItemClick?: (item: NavItem, index: number) => void;
  defaultActiveIndex?: number;
}

export function SpotlightNavbar({
  className,
}: Omit<SpotlightNavbarProps, 'items' | 'onItemClick' | 'defaultActiveIndex'>) {
  const navRef = useRef<HTMLDivElement>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const pathname = usePathname();

  const items = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  const activeIndex = items.findIndex(item => item.href === pathname) ?? -1;

  // Refs for the "light" positions so we can animate them imperatively
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      // Direct update for immediate feedback (no spring for the mouse itself, feels snappier)
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      // When mouse leaves, spring the spotlight back to the active item
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          }
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  // Handle the "Ambience" (Active Item) Movement
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  const handleItemClick = (item: NavItem, index: number) => {
    // onItemClick?.(item, index);
  };

  return (
    <div className={`fixed top-10 left-0 right-0 flex justify-center z-50 ${className || ""}`}>
      <div className="relative">
        <nav
          ref={navRef}
          className="spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow relative h-14 rounded-full transition-all duration-300 overflow-hidden z-10"
        >
        {/* Content */}
        <ul className="relative flex items-center h-full px-4 gap-2 z-[10]">
          {items.map((item, idx) => (
            <li key={idx} className="relative h-full flex items-center justify-center">
              <Link
                href={item.href}
                data-index={idx}
                className={`px-6 py-3 text-base font-medium transition-colors duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/30 ${
                  // Active vs Inactive Text
                  activeIndex === idx
                    ? "text-black dark:text-white"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* LIGHTING LAYERS 
           We use CSS variables --spotlight-x and --ambience-x updated by JS
        */}

        {/* 1. The Moving Spotlight (Follows Mouse) */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
          style={{ 
            opacity: hoverX !== null ? 1 : 0,
            background: `
              radial-gradient(
                120px circle at var(--spotlight-x) 100%, 
                var(--spotlight-color, rgba(0,0,0,0.1)) 0%, 
                transparent 50%
              )
            `
          }}
        />

        {/* 2. The Active State Ambience (Stays on Active) */}
        <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
            style={{
                background: `
                  radial-gradient(
                    60px circle at var(--ambience-x) 0%, 
                    var(--ambience-color, rgba(0,0,0,1)) 0%, 
                    transparent 100%
                  )
                `
            }}
        />
        
        {/* 3. Bottom Border Track (Subtle) */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200 dark:bg-white/[0.1] z-0" />

      </nav>

      {/* Liquid Metal Border Effect */}
      <div className="absolute inset-0 rounded-full liquid-metal-border z-0" />

      </div>

      {/* STYLE BLOCK for Dynamic Colors
        This allows us to switch the gradient colors cleanly using Tailwind classes
        without messy inline conditionals.
      */}
      <style jsx>{`
        nav {
          /* Light Mode Colors: Blue lights */
          --spotlight-color: rgba(14, 165, 233, 0.15);
          --ambience-color: rgba(14, 165, 233, 0.8);
        }
        [data-theme='dark'] nav {
          /* Dark Mode Colors: Blue lights */
          --spotlight-color: rgba(14, 165, 233, 0.25);
          --ambience-color: rgba(14, 165, 233, 1);
        }
      `}</style>
    </div>
  );
}