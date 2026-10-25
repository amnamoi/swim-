import {
  CalendarIcon,
  CompassIcon,
  KidsIcon,
  UserIcon,
  type IconComponent,
} from '@/components/icons';

export interface NavItem {
  href: string;
  label: string;
  icon: IconComponent;
}

export const mainNav: NavItem[] = [
  { href: '/explore', label: 'Explore', icon: CompassIcon },
  { href: '/kids', label: 'My Kids', icon: KidsIcon },
  { href: '/schedule', label: 'Schedule', icon: CalendarIcon },
  { href: '/account', label: 'Account', icon: UserIcon },
];
