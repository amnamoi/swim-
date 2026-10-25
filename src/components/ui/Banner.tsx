import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'success' | 'danger';

const tones: Record<Tone, { box: string; badge: string }> = {
  success: { box: 'bg-success-bg text-success-ink', badge: 'bg-success text-white' },
  danger: { box: 'bg-danger-bg text-danger-ink', badge: 'bg-danger text-white' },
};

interface BannerProps {
  tone?: Tone;
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function Banner({ tone = 'success', icon, title, description, className }: BannerProps) {
  const styles = tones[tone];
  return (
    <div
      role={tone === 'danger' ? 'alert' : 'status'}
      className={cn('flex items-center gap-3 rounded-[18px] px-4 py-3.5', styles.box, className)}
    >
      <span
        className={cn('flex size-9 shrink-0 items-center justify-center rounded-full', styles.badge)}
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-sm font-bold">{title}</span>
        {description && <span className="text-xs font-semibold">{description}</span>}
      </span>
    </div>
  );
}
