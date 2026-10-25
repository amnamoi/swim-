import type { Metadata } from 'next';
import { CheckIcon, KidsIcon, PlusIcon } from '@/components/icons';
import { PageHeader } from '@/components/layout/PageHeader';
import { Banner } from '@/components/ui/Banner';
import { ButtonLink } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { getFamilyOverview } from '@/features/kids/api';
import { KidsView } from '@/features/kids/components/KidsView';
import { QuickActions } from '@/features/kids/components/QuickActions';
import { resolveInitialKidId, toKidsPageView } from '@/features/kids/view-model';

export const metadata: Metadata = { title: 'My Kids' };

interface KidsPageProps {
  searchParams: Promise<{ kid?: string | string[] }>;
}

export default async function KidsPage({ searchParams }: KidsPageProps) {
  const [{ kid }, overview] = await Promise.all([searchParams, getFamilyOverview()]);
  const view = toKidsPageView(overview);
  const initialKidId = resolveInitialKidId(view.kids, Array.isArray(kid) ? kid[0] : kid);

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title="My Kids"
        actions={
          <ButtonLink href="/kids/add" variant="secondary" size="sm">
            <PlusIcon size={16} strokeWidth={2.4} />
            Add child
          </ButtonLink>
        }
      />

      {initialKidId === undefined ? (
        <EmptyState
          icon={<KidsIcon size={28} className="text-brand" />}
          title="No kids added yet"
          description="Add your first child to see classes, passes and swim progress."
          action={<ButtonLink href="/kids/add">Add child</ButtonLink>}
        />
      ) : (
        <>
          {view.enrolledSummary && (
            <Banner
              icon={<CheckIcon size={18} strokeWidth={2.6} />}
              title={view.enrolledSummary.title}
              description={view.enrolledSummary.description}
            />
          )}
          <KidsView
            key={initialKidId}
            kids={view.kids}
            initialKidId={initialKidId}
            familyDiscountPct={view.familyDiscountPct}
          />
          <QuickActions actions={view.quickActions} />
        </>
      )}
    </div>
  );
}
