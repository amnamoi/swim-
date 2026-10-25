import { ButtonLink } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { PageHeader } from './PageHeader';

/** Placeholder for routes that are linked from the UI but not built yet. */
export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-5">
      <PageHeader title={title} />
      <EmptyState
        title="Coming soon"
        description="We're still building this part of the app."
        action={<ButtonLink href="/kids">Back to My Kids</ButtonLink>}
      />
    </div>
  );
}
