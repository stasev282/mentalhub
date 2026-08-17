import { CURRENT_WEEK_DATES, isoDateOf } from "./date";
import { getDailyCheckinsByPatient, getThoughtRecordsByPatient } from "./mock-data";

/**
 * Раздел содержит только прямые выборки сырых фактов (последняя
 * отметка времени, число дней) — без усреднений, процентов и трендов.
 */

export function getLastActivityAt(patientId: string): string | null {
  const timestamps: string[] = [
    ...getThoughtRecordsByPatient(patientId).map((record) => record.createdAt),
    ...getDailyCheckinsByPatient(patientId)
      .filter((checkin) => checkin.anxiety !== null)
      .map((checkin) => `${checkin.date}T00:00:00+03:00`),
  ];

  if (timestamps.length === 0) return null;

  return timestamps.reduce((latest, current) =>
    new Date(current) > new Date(latest) ? current : latest
  );
}

export function getDaysWithRecordsThisWeek(patientId: string): number {
  const days = new Set(
    getThoughtRecordsByPatient(patientId)
      .map((record) => isoDateOf(record.createdAt))
      .filter((date) => CURRENT_WEEK_DATES.includes(date))
  );
  return days.size;
}
