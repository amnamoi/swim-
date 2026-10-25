import { QRCodeSVG } from 'qrcode.react';
import { Card } from '@/components/ui/Card';
import { StatTile } from '@/components/ui/StatTile';
import type { PassView } from '../view-model';

interface MemberPassCardProps {
  name: string;
  pass: PassView;
}

export function MemberPassCard({ name, pass }: MemberPassCardProps) {
  return (
    <Card tone="inverse" padding="lg" aria-label={`${name}'s member pass`} className="flex flex-col gap-4">
      <svg
        viewBox="0 0 390 70"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] w-full text-ink-soft"
      >
        <path d="M0 30 C 60 10, 120 50, 195 30 S 330 10, 390 30 V70 H0Z" fill="currentColor" />
      </svg>

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-[11px] font-bold tracking-[1px] text-accent">MEMBER PASS · ACTIVE</span>
          <h2 className="truncate font-display text-2xl font-semibold">{name}</h2>
          <p className="text-[13px] font-medium text-on-dark-muted">{pass.className}</p>
        </div>
        <div className="shrink-0 rounded-xl bg-white p-2">
          <QRCodeSVG
            value={pass.passCode}
            size={76}
            fgColor="#0B1F3A"
            level="M"
            role="img"
            aria-label={`Check-in QR code for ${name}`}
          />
        </div>
      </div>

      <dl className="relative grid grid-cols-2 gap-2.5">
        <StatTile label="Next class" value={pass.nextSessionLabel} />
        <StatTile label="Coach" value={pass.coachName} />
      </dl>

      <p className="relative text-xs font-medium text-on-dark-muted">
        Show this pass at reception to check in
      </p>
    </Card>
  );
}
