"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MenuNavBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  children: string; // только строка!
}

export const MenuNavBtn = React.forwardRef<HTMLAnchorElement, MenuNavBtnProps>(
  ({ active = false, children, className = '', ...props }, ref) => {
    const lettersRef = useRef<Array<HTMLSpanElement | null>>([]);

    // Разбиваем текст на буквы
    const letters = children.split("").map((char, i) => (
      <span
        key={i}
        ref={el => { lettersRef.current[i] = el; }}
        className="inline-block will-change-transform"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

    useEffect(() => {
      const handleEnter = () => {
        gsap.to(lettersRef.current, {
          y: -24,
          rotateX: 360,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.03,
        });
        gsap.to(lettersRef.current, {
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power2.in",
          delay: 0.3,
          stagger: 0.03,
        });
      };
      const handleLeave = () => {
        gsap.to(lettersRef.current, {
          y: 0,
          rotateX: 0,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.02,
        });
      };

      const node = lettersRef.current[0]?.parentElement?.parentElement;
      if (node) {
        node.addEventListener("mouseenter", handleEnter);
        node.addEventListener("mouseleave", handleLeave);
      }
      return () => {
        if (node) {
          node.removeEventListener("mouseenter", handleEnter);
          node.removeEventListener("mouseleave", handleLeave);
        }
      };
    }, []);

    return (
      <a
        ref={ref}
        className={`relative transition-colors duration-200 px-2 py-1 font-extrabold text-[35px] select-none
          ${active ? 'text-blue-400' : 'text-white'}
          hover:text-gray-700
          ${className}
        `}
        {...props}
      >
        {letters}
      </a>
    );
  }
);
MenuNavBtn.displayName = "MenuNavBtn"; 