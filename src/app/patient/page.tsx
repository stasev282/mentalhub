import Link from "next/link";
import { getDailyCheckinsByPatient, getPatient } from "@/lib/mock-data";
import { CURRENT_PATIENT_ID } from "@/lib/session";
import { CURRENT_WEEK_DATES } from "@/lib/date";
import TodayCheckin from "@/components/TodayCheckin";
import PatientRecordsList from "@/components/PatientRecordsList";

export default function PatientHome() {
  const patient = getPatient(CURRENT_PATIENT_ID);
  if (!patient) return null;

  const checkins = getDailyCheckinsByPatient(CURRENT_PATIENT_ID);
  const today = CURRENT_WEEK_DATES[CURRENT_WEEK_DATES.length - 1];
  const todayCheckin = checkins.find((checkin) => checkin.date === today);

  return (
    <main className="flex-1 px-4 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-neutral-900">
            Здравствуйте, {patient.displayName.split(" ")[0]}
          </h1>
          <Link href="/therapist" className="text-sm text-neutral-500 hover:text-neutral-700">
            Кабинет терапевта →
          </Link>
        </div>

        <TodayCheckin initialValue={todayCheckin?.anxiety ?? null} />

        <Link
          href="/patient/record/new"
          className="flex min-h-[52px] items-center justify-center rounded-lg bg-neutral-800 px-5 text-base font-medium text-white hover:bg-neutral-700"
        >
          Новая запись
        </Link>

        <section>
          <h2 className="mb-3 text-base font-medium text-neutral-900">Мои записи за неделю</h2>
          <PatientRecordsList />
        </section>
      </div>
    </main>
  );
}
