import { cache } from 'react';
import { familyOverviewMock } from './data/family-overview.mock';
import type { FamilyOverview } from './types';

export class ApiError extends Error {
  constructor(message: string, readonly status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Loads everything the My Kids screen needs. Server-only.
 *
 * Wrapped in `cache` so several components in one request share a single
 * call. To go live, replace the mock body with:
 *
 *   const res = await fetch(`${process.env.API_URL}/family/overview`, {
 *     headers: { Authorization: `Bearer ${token}` },
 *     next: { revalidate: 60, tags: ['family-overview'] },
 *   });
 *   if (!res.ok) throw new ApiError('Failed to load family overview', res.status);
 *   return res.json();
 */
export const getFamilyOverview = cache(async (): Promise<FamilyOverview> => {
  await sleep(Number(process.env.MOCK_API_LATENCY_MS ?? 400));

  if (process.env.MOCK_API_FAIL === 'true') {
    throw new ApiError('Failed to load family overview', 503);
  }

  return structuredClone(familyOverviewMock);
});
