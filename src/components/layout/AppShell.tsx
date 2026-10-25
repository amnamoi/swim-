import type { ReactNode } from 'react';
import { MainNav } from './MainNav';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-canvas md:flex">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-30 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <MainNav />
      <main
        id="main"
        className="min-w-0 flex-1 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0"
      >
        <div className="mx-auto w-full max-w-5xl px-5 py-6 md:px-8 md:py-10">{children}</div>
      </main>
    </div>
  );
}
