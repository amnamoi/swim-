'use client';

import { AlertIcon } from '@/components/icons';
import { Button } from './Button';
import { EmptyState } from './EmptyState';

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  retrying?: boolean;
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'Please check your connection and try again.',
  onRetry,
  retrying = false,
}: ErrorStateProps) {
  return (
    <div role="alert">
      <EmptyState
        icon={<AlertIcon size={28} className="text-danger" />}
        title={title}
        description={description}
        action={
          onRetry && (
            <Button onClick={onRetry} disabled={retrying}>
              {retrying ? 'Retrying…' : 'Try again'}
            </Button>
          )
        }
      />
    </div>
  );
}
