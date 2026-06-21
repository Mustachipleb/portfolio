import type React from 'react';

type TimelineProps = {
  children: React.ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return <div className="relative border-l-2 border-gray-50/25 ml-4 md:ml-0">{children}</div>;
}

type TimelineItemProps = {
  children: React.ReactNode;
  date?: string;
};

export function TimelineItem({ children, date }: TimelineItemProps) {
  return (
    <div className="mb-10 ml-4 relative">
      <div className="absolute w-4 h-4 bg-white rounded-full -left-6 top-0.5 border-4 border-black -ml-px" />
      {date && <div className="text-sm text-gray-400 mb-1">{date}</div>}
      {children}
    </div>
  );
}
