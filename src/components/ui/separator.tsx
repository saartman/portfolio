"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * Компонент Separator — визуальный разделитель для интерфейса.
 * Использует Radix UI Separator и поддерживает горизонтальную и вертикальную ориентацию.
 * Можно использовать для отделения блоков, секций, элементов меню и т.д.
 */
function Separator({
  className,
  orientation = "horizontal", // Ориентация: горизонтальная или вертикальная
  decorative = true,           // Только декоративный (не для assistive tech)
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        // Стили для горизонтального и вертикального разделителя
        "bg-border border-2 border-gray-300 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

// Экспорт компонента Separator
export { Separator }

