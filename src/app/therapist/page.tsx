import Link from "next/link";
import { PATIENTS } from "@/lib/mock-data";
import { getDaysWithRecordsThisWeek, getLastActivityAt } from "@/lib/activity";
import { formatFullDateTime } from "@/lib/date";

export default function TherapistHome() {
  return (
    <main className="flex-1 px-4 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-neutral-900">Пациенты</h1>
          <Link href="/patient" className="text-sm text-neutral-500 hover:text-neutral-700">
            Кабинет пациента →
          </Link>
        </div>

        <ul className="flex flex-col gap-3">
          {PATIENTS.map((patient) => {
            const lastActivityAt = getLastActivityAt(patient.id);
            const daysWithRecords = getDaysWithRecordsThisWeek(patient.id);

            return (
              <li key={patient.id}>
                <Link
                  href={`/therapist/patients/${patient.id}`}
                  className="flex flex-col gap-2 rounded-lg border border-neutral-300 px-5 py-4 hover:bg-neutral-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-neutral-900">{patient.displayName}</p>
                    <p className="text-sm text-neutral-500">
                      Неделя {patient.weekOfCourse} из {patient.totalWeeks} · {patient.focus}
                    </p>
                  </div>

                  <div className="text-sm text-neutral-500 sm:text-right">
                    <p>
                      Последняя активность:{" "}
                      {lastActivityAt ? formatFullDateTime(lastActivityAt) : "нет данных"}
                    </p>
                    <p>Дней с записями за неделю: {daysWithRecords} из 7</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
