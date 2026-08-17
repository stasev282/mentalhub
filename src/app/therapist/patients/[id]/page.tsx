import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDailyCheckinsByPatient,
  getGad7ResponsesByPatient,
  getHomeworkItemsByPatient,
  getPatient,
  getThoughtRecordsByPatient,
} from "@/lib/mock-data";
import { formatFullDateTime } from "@/lib/date";
import WeeklyAnxietyChart from "@/components/WeeklyAnxietyChart";
import Gad7Chart from "@/components/Gad7Chart";
import HomeworkList from "@/components/HomeworkList";
import ThoughtRecordCard from "@/components/ThoughtRecordCard";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function TherapistPatientPage({ params }: Props) {
  const { id } = await params;
  const patient = getPatient(id);

  if (!patient) {
    notFound();
  }

  const checkins = getDailyCheckinsByPatient(patient.id);
  const gad7Responses = getGad7ResponsesByPatient(patient.id);
  const homeworkItems = getHomeworkItemsByPatient(patient.id);
  const thoughtRecords = [...getThoughtRecordsByPatient(patient.id)].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <main className="flex-1 px-4 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <div>
          <Link href="/therapist" className="text-sm text-neutral-500 hover:text-neutral-700">
            ← Все пациенты
          </Link>
        </div>

        <header className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-neutral-900">
            {patient.displayName}, {patient.age}
          </h1>
          <p className="text-neutral-600">{patient.focus}</p>
          <p className="text-sm text-neutral-500">
            Неделя {patient.weekOfCourse} из {patient.totalWeeks} · Следующая сессия:{" "}
            {formatFullDateTime(patient.nextSession)}
          </p>
        </header>

        <section>
          <h2 className="mb-3 text-base font-medium text-neutral-900">
            Тревога по дням за неделю
          </h2>
          <WeeklyAnxietyChart checkins={checkins} />
        </section>

        <section>
          <h2 className="mb-3 text-base font-medium text-neutral-900">GAD-7 по неделям курса</h2>
          <Gad7Chart responses={gad7Responses} />
        </section>

        <section>
          <h2 className="mb-3 text-base font-medium text-neutral-900">Домашняя работа</h2>
          <HomeworkList items={homeworkItems} />
        </section>

        <section>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-base font-medium text-neutral-900">Дневники мыслей</h2>
            <span className="text-sm text-neutral-500">
              Показано {thoughtRecords.length} из {patient.recordsTotal} за курс
            </span>
          </div>
          {thoughtRecords.length > 0 ? (
            <div className="flex flex-col gap-2">
              {thoughtRecords.map((record) => (
                <ThoughtRecordCard key={record.id} record={record} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral-400">Записей пока нет.</p>
          )}
        </section>
      </div>
    </main>
  );
}
