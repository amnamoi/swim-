import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import type { PassView } from '../view-model';

interface SwimProgressCardProps {
  name: string;
  pass: Pick<PassView, 'level' | 'progressPct' | 'progressNote'>;
}

export function SwimProgressCard({ name, pass }: SwimProgressCardProps) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-base font-bold">Swim progress</h2>
        <span className="text-[13px] font-semibold text-muted">{pass.level}</span>
      </div>
      <ProgressBar value={pass.progressPct} label={`${name}'s swim progress`} />
      <p className="text-[13px] font-medium text-muted-strong">{pass.progressNote}</p>
    </Card>
  );
}
