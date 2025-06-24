'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Секции, по которым строится прогресс-бар
const sections = [
  { id: "about", label: "Обо мне" },
  { id: "projects", label: "Проекты" },
  { id: "skills", label: "Навыки" },
  { id: "contact", label: "Контакты" },
];

// Боковой прогресс-бар для навигации по секциям страницы
export const SidebarProgressBar = () => {
  // Ссылка на DOM-элемент прогресс-бара
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Массив для хранения триггеров прокрутки
    const triggers: ScrollTrigger[] = [];
    // Для каждой секции создаём ScrollTrigger
    sections.forEach((section, idx) => {
      const trigger = ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(idx), // при входе в секцию
        onEnterBack: () => setActive(idx), // при возврате к секции
      });
      triggers.push(trigger);
    });
    // Очищаем триггеры при размонтировании компонента
    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Устанавливает активную точку прогресс-бара
  const setActive = (idx: number) => {
    if (progressRef.current) {
      const dots = progressRef.current.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === idx);
      });
    }
  };

  // Обработчик клика по точке прогресс-бара
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Визуализация прогресс-бара
  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4" ref={progressRef}>
      {sections.map((section, idx) => (
        // Точка прогресс-бара для каждой секции
        <button
          key={section.id}
          className="dot w-4 h-4 rounded-full bg-gray-300 hover:bg-primary transition-all border-2 border-white shadow-md"
          onClick={() => handleClick(section.id)}
          aria-label={`Перейти к секции ${section.label}`}
        />
      ))}
      <style jsx>{`
        .dot.active {
          background: #2563eb;
          border-color: #2563eb;
          box-shadow: 0 0 0 4px #2563eb33;
        }
      `}</style>
    </aside>
  );
}; 