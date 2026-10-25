import { cn } from '@/lib/cn';

interface ProgressBarProps {
  /** 0–100 */
  value: number;
  label: string;
  className?: string;
}

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className={cn('h-2.5 overflow-hidden rounded-full bg-track', className)}
    >
      <div
        className="h-full rounded-full bg-brand transition-[width] duration-500 ease-out motion-reduce:transition-none"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
