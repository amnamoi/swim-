import Link from 'next/link';
import type { IconComponent } from '@/components/icons';

interface ActionTileProps {
  href: string;
  icon: IconComponent;
  title: string;
  caption: string;
}

export function ActionTile({ href, icon: Icon, title, caption }: ActionTileProps) {
  return (
    <Link
      href={href}
      className="flex h-full flex-col items-start gap-2 rounded-[18px] border border-line bg-surface p-3.5 text-ink transition-colors hover:border-brand/40 hover:bg-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <Icon size={22} className="text-brand" />
      <span className="text-sm font-bold">{title}</span>
      <span className="text-xs font-medium text-muted">{caption}</span>
    </Link>
  );
}
