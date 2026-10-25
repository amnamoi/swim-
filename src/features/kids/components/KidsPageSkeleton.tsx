import { Skeleton } from '@/components/ui/Skeleton';

/** Mirrors the My Kids layout so nothing jumps when data arrives. */
export function KidsPageSkeleton() {
  return (
    <div role="status" aria-live="polite" className="flex flex-col gap-5">
      <span className="sr-only">Loading your kids…</span>
      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-11 w-28 rounded-full" />
      </div>
      <Skeleton className="h-16 rounded-[18px]" />
      <Skeleton className="h-[52px] rounded-[14px]" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Skeleton className="h-60 rounded-3xl" />
        <Skeleton className="h-28 rounded-[20px]" />
      </div>
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton key={i} className="h-[104px] rounded-[18px]" />
        ))}
      </div>
    </div>
  );
}
