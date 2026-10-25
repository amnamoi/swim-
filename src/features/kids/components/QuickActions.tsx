import {
  BellIcon,
  CalendarPlusIcon,
  ChatIcon,
  PauseIcon,
  type IconComponent,
} from '@/components/icons';
import { ActionTile } from '@/components/ui/ActionTile';
import type { QuickActionIcon, QuickActionView } from '../view-model';

const icons: Record<QuickActionIcon, IconComponent> = {
  'calendar-plus': CalendarPlusIcon,
  chat: ChatIcon,
  pause: PauseIcon,
  bell: BellIcon,
};

export function QuickActions({ actions }: { actions: QuickActionView[] }) {
  return (
    <section aria-labelledby="quick-actions-heading">
      <h2 id="quick-actions-heading" className="sr-only">
        Quick actions
      </h2>
      <ul className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {actions.map((action) => (
          <li key={action.id}>
            <ActionTile
              href={action.href}
              icon={icons[action.icon]}
              title={action.title}
              caption={action.caption}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
