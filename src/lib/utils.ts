import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Универсальная функция для объединения классов с поддержкой условных значений и приоритетов Tailwind
// Использует clsx для условного объединения и twMerge для устранения конфликтов tailwind-классов
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
