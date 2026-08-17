/**
 * Форматирование дат. Никакой логики вычисления показателей здесь нет —
 * только представление сырых значений.
 */

// Прототип оперирует одной фиксированной неделей мок-данных.
export const CURRENT_WEEK_DATES: string[] = [
  "2026-08-11",
  "2026-08-12",
  "2026-08-13",
  "2026-08-14",
  "2026-08-15",
  "2026-08-16",
  "2026-08-17",
];

const WEEKDAY_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
  weekday: "short",
});

const DATE_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "short",
});

const DATETIME_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});

const FULL_DATETIME_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatWeekday(isoDate: string): string {
  return WEEKDAY_FORMATTER.format(new Date(`${isoDate}T00:00:00+03:00`));
}

export function formatShortDate(isoDate: string): string {
  return DATE_FORMATTER.format(new Date(`${isoDate}T00:00:00+03:00`));
}

export function formatDateTime(isoDateTime: string): string {
  return DATETIME_FORMATTER.format(new Date(isoDateTime));
}

export function formatFullDateTime(isoDateTime: string): string {
  return FULL_DATETIME_FORMATTER.format(new Date(isoDateTime));
}

export function isoDateOf(isoDateTime: string): string {
  return isoDateTime.slice(0, 10);
}
