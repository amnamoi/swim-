'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav } from '@/config/navigation';
import { cn } from '@/lib/cn';

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Bottom tab bar on phones; vertical rail from the `md` breakpoint up. */
export function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className={cn(
        'fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)]',
        'md:sticky md:top-0 md:h-dvh md:w-24 md:shrink-0 md:border-t-0 md:border-r md:pb-0',
      )}
    >
      <ul className="flex h-16 items-center justify-around md:h-auto md:flex-col md:gap-2 md:pt-8">
        {mainNav.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex min-h-12 min-w-16 flex-col items-center justify-center gap-1 rounded-xl text-[11px] transition-colors',
                  'focus-visible:outline-2 focus-visible:outline-brand md:py-2',
                  active ? 'font-bold text-brand' : 'font-semibold text-muted hover:text-ink',
                )}
              >
                <Icon />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
