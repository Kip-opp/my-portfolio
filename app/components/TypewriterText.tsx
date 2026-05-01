"use client";
import { useState, useEffect } from "react";

const roles = [
  "Hi, there! My name is Kip.",
  "A Full Stack Engineer",
  "AI Specialist",
  "RAG Systems Builder",
  "and an Autonomous Agent Developer",
];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      if (!deleting && charIndex < current.length) {
        timeoutId = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
      } else if (!deleting && charIndex === current.length) {
        timeoutId = setTimeout(() => {
          setDeleting(true);
        }, 2000);
      } else if (deleting && charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    tick();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <span className="text-blue-400 font-mono">
      {displayed}
      <span className="cursor-blink text-blue-300 ml-0.5">|</span>
    </span>
  );
}
