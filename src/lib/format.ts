/** Club-local time zone; all session times are shown in Kuwait time. */
const CLUB_TIME_ZONE = 'Asia/Kuwait';

const kwdFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

const dateParts = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  timeZone: CLUB_TIME_ZONE,
});

const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

/** 32.25 → "32.250 KWD" (KWD uses three decimal places). */
export function formatKwd(amount: number): string {
  return `${kwdFormatter.format(amount)} KWD`;
}

/** ISO timestamp → "Sun 8 Nov · 5 PM" in club time. */
export function formatSessionLabel(iso: string): string {
  const date = new Date(iso);
  const parts = Object.fromEntries(
    dateParts.formatToParts(date).map((p) => [p.type, p.value]),
  );
  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', timeZone: CLUB_TIME_ZONE };
  // Kuwait is a whole-hour offset, so UTC minutes match local minutes.
  if (date.getUTCMinutes() !== 0) timeOptions.minute = '2-digit';
  const time = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

  return `${parts.weekday} ${parts.day} ${parts.month} · ${time}`;
}

/** ["Omar", "Lulu"] → "Omar and Lulu". */
export function formatList(items: string[]): string {
  return listFormatter.format(items);
}

export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`;
}
