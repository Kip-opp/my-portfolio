"use client";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Engineer",
  "AI Specialist",
  "RAG Systems Builder",
  "Autonomous Agent Dev",
];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-indigo-400 font-mono">
      {displayed}
      <span className="cursor-blink text-indigo-300 ml-0.5">|</span>
    </span>
  );
}
