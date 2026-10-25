import type { ReactNode, SVGProps } from 'react';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & { size?: number };
export type IconComponent = (props: IconProps) => ReactNode;

function createIcon(displayName: string, children: ReactNode): IconComponent {
  function Icon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {children}
      </svg>
    );
  }
  Icon.displayName = displayName;
  return Icon;
}

export const PlusIcon = createIcon('PlusIcon', <path d="M12 5v14M5 12h14" />);
export const CheckIcon = createIcon('CheckIcon', <path d="M5 12l5 5 9-10" />);
export const CompassIcon = createIcon(
  'CompassIcon',
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </>,
);
export const KidsIcon = createIcon(
  'KidsIcon',
  <>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15.5 14.2c3 .2 5.5 2.6 5.5 5.8" />
  </>,
);
export const CalendarIcon = createIcon(
  'CalendarIcon',
  <>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </>,
);
export const CalendarPlusIcon = createIcon(
  'CalendarPlusIcon',
  <>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5" />
  </>,
);
export const UserIcon = createIcon(
  'UserIcon',
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </>,
);
export const ChatIcon = createIcon(
  'ChatIcon',
  <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
);
export const PauseIcon = createIcon(
  'PauseIcon',
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 9v6M14 9v6" />
  </>,
);
export const BellIcon = createIcon(
  'BellIcon',
  <>
    <path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8" />
    <path d="M10 20a2 2 0 004 0" />
  </>,
);
export const AlertIcon = createIcon(
  'AlertIcon',
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5M12 16h.01" />
  </>,
);
