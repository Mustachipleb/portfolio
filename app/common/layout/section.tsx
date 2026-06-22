import type React from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <div
      className={twMerge(
        'flex md:flex-row flex-col items-center justify-center py-24 w-full mx-auto px-8 max-w-300 z-10 relative',
        className,
      )}
    >
      {children}
    </div>
  );
}
