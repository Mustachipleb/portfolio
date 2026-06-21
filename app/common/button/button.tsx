import type React from 'react';
import { NavLink, type To } from 'react-router';

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
        className={`border-3 border-gray-50/25 px-24 py-2 w-fit rounded-full text-xl cursor-pointer ${className}`}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      className={`border-3 border-gray-50/25 px-24 py-2 w-fit rounded-full text-xl cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
