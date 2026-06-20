import type React from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  className?: string;
};

export function Button({ type, children, className }: ButtonProps) {
  return (
    <button
      type={type}
      className={`border-3 border-gray-50/25 px-24 py-2 w-fit rounded-full text-xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
