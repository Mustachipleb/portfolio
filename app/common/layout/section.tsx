import type React from 'react';

type SectionProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <div
      className={`flex md:flex-row flex-col items-center justify-center py-24 w-full mx-auto px-8 max-w-300 ${className}`}
    >
      {children}
    </div>
  );
}
