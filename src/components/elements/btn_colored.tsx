'use client';
import React from "react";

// Описание props для цветной кнопки
interface BtnColoredProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // содержимое кнопки
  textClassName?: string;    // дополнительные классы для текста
}

// Кастомная кнопка с цветным фоном и анимацией
export const BtnColored = React.forwardRef<HTMLButtonElement, BtnColoredProps>(
  (
    { children, className = '', type = 'button', disabled = false, textClassName = '', ...props },
    ref
  ) => {
    return (
      // Кнопка с кастомными стилями и поддержкой ref
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`
          group
          inline-flex flex-col justify-center items-start w-fit h-fit -m-4
          rounded-lg font-semibold
          bg-transparent
          focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2
          disabled:cursor-not-allowed
          transition-colors duration-200
          ${className}
        `}
        {...props}
      >
        {/* Внутренний контейнер для декоративного прямоугольника */}
        <div className="self-stretch pl-5 pr-3.5 flex flex-col justify-start items-start gap-2.5">
        {/* Декоративный прямоугольник, меняющий цвет при hover/active/disabled */}
        <div
          className={`
            self-stretch h-6 p-2.5 bg-pink-600/10 rounded-[90px]
            bg-transparent
            group-hover:bg-pink-600/20
            group-active:bg-pink-600/10
            disabled:bg-transparent
            transition-colors duration-200
            pointer-events-none
          `}
          aria-hidden="true"
        />
        </div>
        {/* Текст кнопки */}
        <span className={`justify-start text-black text-4xl font-bold font-['Manrope'] ${textClassName}`}>
          {children}
        </span>
      </button>
    );
  }
);
BtnColored.displayName = "BtnColored";
