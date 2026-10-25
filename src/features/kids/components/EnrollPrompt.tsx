import { ButtonLink } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import type { ProgramRecommendation } from '../types';

interface EnrollPromptProps {
  name: string;
  familyDiscountPct: number;
  totalKids: number;
  recommendation: ProgramRecommendation | null;
  className?: string;
}

export function EnrollPrompt({
  name,
  familyDiscountPct,
  totalKids,
  recommendation,
  className,
}: EnrollPromptProps) {
  const description =
    familyDiscountPct > 0 && totalKids > 1
      ? `Enroll ${name} to unlock the ${familyDiscountPct}% family rate for all ${totalKids} kids.`
      : `Enroll ${name} to start swimming this season.`;

  return (
    <EmptyState
      className={className}
      title={`${name} isn't enrolled this season`}
      description={description}
      action={
        <ButtonLink href={recommendation?.href ?? '/classes'}>
          {recommendation ? `Find ${recommendation.name} classes` : 'Browse classes'}
        </ButtonLink>
      }
    />
  );
}
