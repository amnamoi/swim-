'use client';

import { useRef, type KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';

export interface TabItem {
  id: string;
  label: string;
}

interface SegmentedTabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Accessible name for the tab list, e.g. "Children". */
  label: string;
  /** Namespaces the tab/panel ids so several tab sets can share a page. */
  idPrefix: string;
  className?: string;
}

export const tabId = (prefix: string, id: string) => `${prefix}-tab-${id}`;
export const tabPanelId = (prefix: string, id: string) => `${prefix}-panel-${id}`;

/**
 * Pill-style tab switcher following the WAI-ARIA tabs pattern
 * (roving tabindex, arrow/Home/End keys). Scrolls horizontally when
 * there are more tabs than fit on a phone screen.
 */
export function SegmentedTabs({ items, value, onChange, label, idPrefix, className }: SegmentedTabsProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const current = items.findIndex((item) => item.id === value);
    const last = items.length - 1;
    const targets: Record<string, number> = {
      ArrowRight: current === last ? 0 : current + 1,
      ArrowLeft: current === 0 ? last : current - 1,
      Home: 0,
      End: last,
    };
    const next = targets[event.key];

    if (next === undefined) return;
    event.preventDefault();
    const target = items[next];
    if (!target) return;
    onChange(target.id);
    refs.current[next]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={cn('flex gap-1 overflow-x-auto rounded-[14px] bg-track p-1', className)}
    >
      {items.map((item, index) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={tabId(idPrefix, item.id)}
            aria-selected={selected}
            aria-controls={tabPanelId(idPrefix, item.id)}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={cn(
              'min-h-11 min-w-[88px] flex-1 shrink-0 rounded-[11px] px-3 text-sm font-bold transition-colors',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
              selected
                ? 'bg-surface text-ink shadow-[0_1px_3px_rgba(11,31,58,0.15)]'
                : 'text-muted-strong hover:text-ink',
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
