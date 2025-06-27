'use client';
import React from "react";

// Карта цветов для разных вариантов кнопки
const colorMap = {
  roze: {
    base: 'bg-[rgba(236,0,140,0.1)]',
    hover: 'hover:bg-[rgba(236,0,140,0.2)]',
    text: 'text-black',
  },
  blue: {
    base: 'bg-[rgba(31,81,255,0.1)]',
    hover: 'hover:bg-[rgba(31,81,255,0.2)]',
    text: 'text-black',
  },
  green: {
    base: 'bg-[rgba(97,206,13,0.1)]',
    hover: 'hover:bg-[97,206,13,0.2)]',
    text: 'text-black',
  },
};

// Типы для пропсов цвета и варианта
type BtnColoredColor = keyof typeof colorMap;
type BtnColoredVariant = 'default' | 'active';

// Пропсы для компонента BtnColored
interface BtnColoredProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Цвет кнопки (roze, blue, green) */
  color?: BtnColoredColor;
  /** Вариант отображения (default — полупрозрачная, active — яркая) */
  variant?: BtnColoredVariant;
  /** Контент кнопки */
  children: React.ReactNode;
}

/**
 * Компонент BtnColored — кастомная кнопка с цветным фоном и декоративным прямоугольником.
 * Используется для выделения ролей/категорий (например, в AboutSection).
 * Поддерживает разные цвета, варианты (active/default), состояния (disabled).
 */
export const BtnColored = React.forwardRef<HTMLButtonElement, BtnColoredProps>(
  (
    {
      color = 'roze',
      variant = 'default',
      disabled = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const colorStyles = colorMap[color];
    // Состояния: default (opacity-30), active (opacity-100), hover (ярче фон), disabled (opacity-50)
    const isDefault = variant === 'default';
    const isActive = variant === 'active';
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={`
          group
          inline-flex flex-col-reverse items-start justify-center pb-[15px] pt-0 px-0 relative
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2
          disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {/* Текст кнопки */}
        <span
          className={`
            font-manrope font-bold text-[35px] text-left text-nowrap mb-[-15px] order-2
            ${colorStyles.text}
            ${isDefault ? 'opacity-30' : ''}
            ${isActive ? '' : ''}
            ${disabled ? 'opacity-50' : ''}
          `}
        >
          {children}
        </span>
        {/* Декоративный прямоугольник (фон кнопки) */}
        <div className="order-1 relative shrink-0 w-full">
          <div className="relative w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start pl-5 pr-[15px] py-0 w-full">
              <div
                className={`h-[23px] rounded-[90px] w-full transition-colors duration-200
                  ${colorStyles.base}
                  ${colorStyles.hover}
                  ${isDefault ? '' : ''}
                  ${isActive ? '' : ''}
                  ${disabled ? 'bg-gray-200' : ''}
                `}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </button>
    );
  }
);
// Имя компонента для React DevTools
BtnColored.displayName = "BtnColored";
