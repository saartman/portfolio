import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Универсальная функция для объединения CSS-классов с поддержкой условных значений и приоритетов Tailwind.
 * Использует clsx для условного объединения и twMerge для устранения конфликтов tailwind-классов.
 *
 * @param inputs - Список классов (строки, объекты, массивы, условные значения)
 * @returns Строка с объединёнными и оптимизированными классами
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
