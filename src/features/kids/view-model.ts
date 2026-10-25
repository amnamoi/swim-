import { formatKwd, formatList, formatSessionLabel, pluralize } from '@/lib/format';
import type { FamilyOverview, Kid, ProgramRecommendation } from './types';

/**
 * View models: plain, pre-formatted, serialisable data for the UI.
 * Formatting happens on the server so dates render identically on
 * server and client (no hydration mismatches), and components stay dumb.
 */

export interface PassView {
  className: string;
  coachName: string;
  level: string;
  nextSessionLabel: string;
  progressPct: number;
  progressNote: string;
  passCode: string;
}

export interface KidView {
  id: string;
  name: string;
  pass: PassView | null;
  recommendation: ProgramRecommendation | null;
}

export type QuickActionIcon = 'calendar-plus' | 'chat' | 'pause' | 'bell';

export interface QuickActionView {
  id: string;
  title: string;
  caption: string;
  href: string;
  icon: QuickActionIcon;
}

export interface KidsPageView {
  kids: KidView[];
  enrolledSummary: { title: string; description: string } | null;
  familyDiscountPct: number;
  quickActions: QuickActionView[];
}

export function toKidView(kid: Kid): KidView {
  const e = kid.enrollment;
  return {
    id: kid.id,
    name: kid.name,
    recommendation: kid.recommendedProgram,
    pass: e && {
      className: e.className,
      coachName: e.coachName,
      level: e.level,
      passCode: e.passCode,
      nextSessionLabel: formatSessionLabel(e.nextSessionAt),
      progressPct: e.skillsTotal > 0 ? Math.round((e.skillsCompleted / e.skillsTotal) * 100) : 0,
      progressNote: [
        `${e.skillsCompleted} of ${e.skillsTotal} skills signed off`,
        e.nextSkill && `next: ${e.nextSkill}`,
      ]
        .filter(Boolean)
        .join(' · '),
    },
  };
}

export function toKidsPageView(overview: FamilyOverview): KidsPageView {
  const enrolledNames = overview.kids.filter((k) => k.enrollment).map((k) => k.name);

  return {
    kids: overview.kids.map(toKidView),
    familyDiscountPct: overview.familyDiscountPct,
    enrolledSummary:
      enrolledNames.length > 0
        ? {
            title: `${formatList(enrolledNames)} ${enrolledNames.length === 1 ? 'is' : 'are'} enrolled`,
            description:
              overview.savingsKwd > 0
                ? `${overview.seasonName} · you saved ${formatKwd(overview.savingsKwd)}`
                : overview.seasonName,
          }
        : null,
    quickActions: [
      {
        id: 'make-up',
        title: 'Book make-up',
        caption: `${pluralize(overview.makeUpCredits, 'credit')} left`,
        href: '/schedule',
        icon: 'calendar-plus',
      },
      {
        id: 'message-coach',
        title: 'Message coach',
        caption: 'Replies within a day',
        href: '/account',
        icon: 'chat',
      },
      {
        id: 'pause',
        title: 'Pause membership',
        caption: 'Travel or illness',
        href: '/account',
        icon: 'pause',
      },
      {
        id: 'reminders',
        title: 'Class reminders',
        caption: `${pluralize(overview.reminderLeadHours, 'hour')} before`,
        href: '/account',
        icon: 'bell',
      },
    ],
  };
}

/** Picks the kid from `?kid=`, falling back to the first enrolled kid. */
export function resolveInitialKidId(kids: KidView[], requested?: string): string | undefined {
  if (requested && kids.some((k) => k.id === requested)) return requested;
  return (kids.find((k) => k.pass) ?? kids[0])?.id;
}
