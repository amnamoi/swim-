import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  actions?: ReactNode;
}

export function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3">
      <h1 className="font-display text-[28px] font-semibold md:text-[32px]">{title}</h1>
      {actions}
    </header>
  );
}
