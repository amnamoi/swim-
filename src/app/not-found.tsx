import { AppShell } from '@/components/layout/AppShell';
import { ButtonLink } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';

export default function NotFound() {
  return (
    <AppShell>
      <EmptyState
        title="Page not found"
        description="The page you're looking for doesn't exist or has moved."
        action={<ButtonLink href="/kids">Go to My Kids</ButtonLink>}
      />
    </AppShell>
  );
}
