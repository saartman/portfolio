import React from "react";

// Пропсы компонента CircleText
interface CircleTextProps {
  /** Текст, который будет выведен по кругу */
  text: string;
  /** Радиус окружности (в px), по которой идёт текст */
  radius?: number;
  /** Размер шрифта (в px) */
  fontSize?: number;
  /** Дополнительные CSS-классы для SVG */
  className?: string;
  /** Цвет обводки текста (stroke) */
  stroke?: string;
  /** Цвет заливки текста (fill) */
  fill?: string;
}

/**
 * Компонент для вывода текста по кругу с помощью SVG <textPath>.
 * Используется для декоративных надписей, например, в AboutSection.
 */
export const CircleText: React.FC<CircleTextProps> = ({
  text,
  radius = 100,
  fontSize = 42,
  className = "",
  stroke = "none",
  fill = "#000",
}) => {
  // Длина окружности (может быть полезна для расчёта длины текста)
  const circumference = 2 * Math.PI * radius;
  return (
    <svg
      width={radius * 2 + fontSize}
      height={radius * 2 + fontSize}
      viewBox={`0 0 ${radius * 2 + fontSize} ${radius * 2 + fontSize}`}
      className={className}
      style={{ display: "block" }}
    >
      <defs>
        {/* Окружность, по которой будет идти текст */}
        <path
          id="circlePath"
          d={`M ${radius + fontSize / 2},${radius + fontSize / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${
            radius * 2
          },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
      </defs>
      <text
        fontFamily="Manrope, sans-serif"
        fontWeight={800}
        fontSize={fontSize}
        letterSpacing="0.1em"
        fill={fill}
        stroke={stroke}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {/* Текст по кругу */}
        <textPath
          xlinkHref="#circlePath"
          startOffset="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {text}
        </textPath>
      </text>
    </svg>
  );
};

// Экспорт по умолчанию
export default CircleText; 