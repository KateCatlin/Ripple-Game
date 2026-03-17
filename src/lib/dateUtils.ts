/**
 * Shared date utility functions for consistent timezone handling.
 *
 * TIMEZONE: All date calculations use HST (Pacific/Honolulu, UTC-10) as the reference.
 * HST was chosen to give users worldwide maximum time before daily reset.
 * Hawaii doesn't observe DST, so reset is always at midnight HST (10am UTC).
 */

/**
 * Get the current date in HST (Hawaii) timezone as a YYYY-MM-DD string.
 * This ensures all users see the same "today" based on HST midnight.
 * HST = UTC-10, no daylight saving time.
 */
export const getTodayInHST = (): string => {
  const now = new Date();
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Pacific/Honolulu',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(now);
};

/**
 * Convert a Date object to HST date string (YYYY-MM-DD).
 */
export const dateToHSTString = (date: Date): string => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Pacific/Honolulu',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
};
