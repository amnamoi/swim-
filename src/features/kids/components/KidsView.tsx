'use client';

import { useCallback, useMemo, useState } from 'react';
import { SegmentedTabs, tabId, tabPanelId } from '@/components/ui/SegmentedTabs';
import type { KidView } from '../view-model';
import { EnrollPrompt } from './EnrollPrompt';
import { MemberPassCard } from './MemberPassCard';
import { SwimProgressCard } from './SwimProgressCard';

const ID_PREFIX = 'kids';

interface KidsViewProps {
  kids: KidView[];
  initialKidId: string;
  familyDiscountPct: number;
}

/**
 * Child switcher + the selected child's pass. Selection lives in local
 * state for instant switching and is mirrored to `?kid=` so it survives
 * refreshes and can be deep-linked.
 */
export function KidsView({ kids, initialKidId, familyDiscountPct }: KidsViewProps) {
  const [selectedId, setSelectedId] = useState(initialKidId);
  const selected = kids.find((k) => k.id === selectedId) ?? kids[0];

  const tabs = useMemo(() => kids.map(({ id, name }) => ({ id, label: name })), [kids]);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    const url = new URL(window.location.href);
    url.searchParams.set('kid', id);
    window.history.replaceState(null, '', url);
  }, []);

  if (!selected) return null;

  return (
    <div className="flex flex-col gap-4">
      <SegmentedTabs
        items={tabs}
        value={selected.id}
        onChange={handleSelect}
        label="Children"
        idPrefix={ID_PREFIX}
      />

      <div
        role="tabpanel"
        id={tabPanelId(ID_PREFIX, selected.id)}
        aria-labelledby={tabId(ID_PREFIX, selected.id)}
        className="grid gap-4 lg:grid-cols-2"
      >
        {selected.pass ? (
          <>
            <MemberPassCard name={selected.name} pass={selected.pass} />
            <SwimProgressCard name={selected.name} pass={selected.pass} />
          </>
        ) : (
          <EnrollPrompt
            className="lg:col-span-2"
            name={selected.name}
            familyDiscountPct={familyDiscountPct}
            totalKids={kids.length}
            recommendation={selected.recommendation}
          />
        )}
      </div>
    </div>
  );
}
