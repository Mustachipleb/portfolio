import type React from 'react';
import { NavLink, type To } from 'react-router';
import { twMerge } from 'tailwind-merge';

type ButtonProps =
  | {
      type: 'navLink';
      children?: React.ReactNode;
      className?: string;
      to: To;
      onClick?: never;
    }
  | {
      type: 'button' | 'submit' | 'reset';
      children?: React.ReactNode;
      className?: string;
      to?: never;
      onClick?: () => void;
    };

export function Button({ type, children, className, to, onClick }: ButtonProps) {
  if (type === 'navLink') {
    return (
      <NavLink
        to={to}
        className={twMerge(
          `border-3 border-gray-50/25 px-24 py-2 w-fit rounded-full text-xl cursor-pointer hover:bg-gray-500/25`,
          className,
        )}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      className={twMerge(
        `border-3 border-gray-50/25 px-24 py-2 w-fit rounded-full text-xl cursor-pointer hover:bg-gray-500/25`,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
