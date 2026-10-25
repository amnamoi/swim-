import type { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = { title: 'Add child' };

export default function Page() {
  return <ComingSoon title="Add child" />;
}
