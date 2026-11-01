const MINUTE_MS = 60_000;

export function addMinutes(isoDate: string, minutes: number): string {
  return new Date(
    new Date(isoDate).getTime() + minutes * MINUTE_MS,
  ).toISOString();
}
