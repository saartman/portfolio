'use client';
import React from "react";

interface BtnColoredProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const BtnColored = React.forwardRef<HTMLButtonElement, BtnColoredProps>(
  (
    { children, className = '', type = 'button', disabled = false, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center
          w-auto
          px-6 py-2 rounded-lg font-semibold text-white
          bg-blue-600
          hover:bg-blue-700
          active:bg-blue-800
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          disabled:bg-gray-400 disabled:cursor-not-allowed
          transition-colors duration-200
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);
BtnColored.displayName = "BtnColored";
