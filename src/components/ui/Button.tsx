import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary';
type Size = 'sm' | 'md';

interface StyleOptions {
  variant?: Variant;
  size?: Size;
}

const base =
  'inline-flex items-center justify-center gap-1.5 font-bold whitespace-nowrap transition-colors ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ' +
  'disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  secondary: 'border border-line bg-surface text-brand hover:bg-canvas',
};

const sizes: Record<Size, string> = {
  sm: 'min-h-11 rounded-full px-3.5 text-[13px]',
  md: 'min-h-[46px] rounded-[14px] px-[18px] text-sm',
};

export function buttonStyles({ variant = 'primary', size = 'md' }: StyleOptions = {}): string {
  return cn(base, variants[variant], sizes[size]);
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & StyleOptions;

export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & StyleOptions;

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
