import type { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = { title: 'Account' };

export default function Page() {
  return <ComingSoon title="Account" />;
}
