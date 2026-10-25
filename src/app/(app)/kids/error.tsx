'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { ErrorState } from '@/components/ui/ErrorState';

interface KidsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function KidsError({ error, reset }: KidsErrorProps) {
  const router = useRouter();
  const [retrying, startTransition] = useTransition();

  useEffect(() => {
    // Hook point for error reporting (Sentry, Datadog, …).
    console.error(error);
  }, [error]);

  function handleRetry() {
    // refresh() refetches the server data; reset() re-renders the segment.
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <PageHeader title="My Kids" />
      <ErrorState
        title="We couldn't load your kids"
        description="Please check your connection and try again."
        onRetry={handleRetry}
        retrying={retrying}
      />
    </div>
  );
}
