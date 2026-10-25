import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Card } from './Card';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <Card padding="lg" className={cn('flex flex-col items-start gap-3', className)}>
      {icon}
      <h2 className="text-base font-bold">{title}</h2>
      {description && <p className="text-[13px] font-medium text-muted">{description}</p>}
      {action}
    </Card>
  );
}
