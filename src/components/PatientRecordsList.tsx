"use client";

import { usePatientRecords } from "@/lib/patient-records-context";
import { CURRENT_WEEK_DATES, formatFullDateTime, isoDateOf } from "@/lib/date";

export default function PatientRecordsList() {
  const { records } = usePatientRecords();
  const weekRecords = records.filter((record) =>
    CURRENT_WEEK_DATES.includes(isoDateOf(record.createdAt))
  );

  if (weekRecords.length === 0) {
    return <p className="text-sm text-neutral-400">На этой неделе записей пока нет.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {weekRecords.map((record) => (
        <li key={record.id} className="rounded-lg border border-neutral-200 px-4 py-3">
          <p className="text-sm text-neutral-500">{formatFullDateTime(record.createdAt)}</p>
          <p className="text-neutral-900">{record.situation || "Ситуация не заполнена"}</p>
        </li>
      ))}
    </ul>
  );
}
