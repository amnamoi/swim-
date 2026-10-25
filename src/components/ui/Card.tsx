import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type CardProps = ComponentPropsWithoutRef<'section'> & {
  tone?: 'default' | 'inverse';
  padding?: 'md' | 'lg';
};

const tones = {
  default: 'rounded-[20px] border border-line bg-surface text-ink',
  inverse: 'relative overflow-hidden rounded-3xl bg-ink text-white',
};

const paddings = { md: 'p-4', lg: 'p-5' };

export function Card({ tone = 'default', padding = 'md', className, ...props }: CardProps) {
  return <section className={cn(tones[tone], paddings[padding], className)} {...props} />;
}
