"use client"
// Импортируем необходимые зависимости из React и GSAP для анимаций
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

// Описываем интерфейс пропсов для компонента MenuNavBtn
// active — выделен ли пункт меню
// children — текст кнопки (строка)
interface MenuNavBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  children: string; // только строка!
}

// Основной компонент MenuNavBtn, реализованный через forwardRef для поддержки ref
export const MenuNavBtn = React.forwardRef<HTMLAnchorElement, MenuNavBtnProps>(
  (
    { active = false, children, className = '', ...props },
    ref // внешний ref
  ) => {
    // Массив рефов для каждого внутреннего span с буквой
    const lettersRef = useRef<Array<HTMLSpanElement | null>>([]);
    // Массив рефов для контейнеров (outer span) с overflow-hidden
    const containersRef = useRef<Array<HTMLSpanElement | null>>([]);
    // Ref на саму ссылку <a>
    const anchorRef = useRef<HTMLAnchorElement | null>(null);

    // Разбиваем текст children на отдельные буквы и оборачиваем каждую в контейнер с overflow-hidden
    const letters = children.split("").map((char, i) => (
      <span
        key={i}
        ref={el => { containersRef.current[i] = el; }}
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          verticalAlign: 'top',
          height: '1em',
          width: 'auto',
        }}
      >
        <span
          ref={el => { lettersRef.current[i] = el; }}
          className="inline-block will-change-transform h-full"
          style={{ display: 'inline-block' }}
        >
          <span style={{ display: 'block' }}>{char === " " ? "\u00A0" : char}</span>
          <span style={{ display: 'block' }}>{char === " " ? "\u00A0" : char}</span>
        </span>
      </span>
    ));

    useEffect(() => {
      // Функция анимации при наведении (mouseenter)
      const handleEnter = () => {
        lettersRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.to(el, {
            yPercent: -100,
            duration: 0.225,
            ease: "power2.in",
            delay: i * 0.02,
            onComplete: () => {
              gsap.to(el, {
                yPercent: 0,
                duration: 0.275,
                ease: "power2.out",
              });
            }
          });
        });
      };
      // Функция анимации при уходе мыши (mouseleave)
      const handleLeave = () => {
        lettersRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.to(el, {
            yPercent: 0,
            duration: 0.2,
            ease: "power2.out",
            delay: i * 0.01,
          });
        });
      };
      // Навешиваем обработчики только на текущий <a>
      const node = anchorRef.current;
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

    // Объединяем внешний ref и внутренний anchorRef
    function setRefs(el: HTMLAnchorElement) {
      anchorRef.current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = el;
    }

    return (
      <a
        ref={setRefs}
        className={`relative transition-colors duration-200 font-extrabold text-[2.5vw] select-none h-[1em]
          ${active ? 'text-white opacity-100' : 'text-white opacity-25'} // Активная — белая, неактивная — белая с прозрачностью
          hover:text-white 
          ${className}
        `}
        {...props}
      >
        {letters}
      </a>
    );
  }
);

// Устанавливаем displayName для корректного отображения в React DevTools
MenuNavBtn.displayName = "MenuNavBtn"; 