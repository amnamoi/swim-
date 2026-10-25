import { cn } from '@/lib/cn';

interface StatTileProps {
  label: string;
  value: string;
  tone?: 'inverse' | 'default';
}

const tones = {
  inverse: { box: 'bg-white/8', label: 'text-on-dark-muted' },
  default: { box: 'bg-canvas', label: 'text-muted' },
};

/** A label/value pair. Render inside a `<dl>`. */
export function StatTile({ label, value, tone = 'inverse' }: StatTileProps) {
  const styles = tones[tone];
  return (
    <div className={cn('flex min-w-0 flex-col gap-0.5 rounded-[14px] px-3 py-2.5', styles.box)}>
      <dt className={cn('text-[11px] font-semibold', styles.label)}>{label}</dt>
      <dd className="truncate text-sm font-bold">{value}</dd>
    </div>
  );
}
