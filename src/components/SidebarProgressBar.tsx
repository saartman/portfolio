'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "about", label: "Обо мне" },
  { id: "projects", label: "Проекты" },
  { id: "skills", label: "Навыки" },
  { id: "contact", label: "Контакты" },
];

export const SidebarProgressBar = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    sections.forEach((section, idx) => {
      const trigger = ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(idx),
        onEnterBack: () => setActive(idx),
      });
      triggers.push(trigger);
    });
    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const setActive = (idx: number) => {
    if (progressRef.current) {
      const dots = progressRef.current.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === idx);
      });
    }
  };

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={progressRef}
      className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-50"
    >
      <div className="flex flex-col items-center gap-6">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            className="dot w-4 h-4 rounded-full bg-gray-300 transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            onClick={() => handleClick(section.id)}
            aria-label={section.label}
          />
        ))}
        <div className="w-1 bg-gray-200 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-[-1]" style={{height: '100%'}} />
      </div>
      <style jsx>{`
        .dot.active {
          background: #2563eb;
          border-color: #2563eb;
          box-shadow: 0 0 0 4px #2563eb33;
        }
      `}</style>
    </div>
  );
}; 