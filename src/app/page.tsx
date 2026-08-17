import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <p className="text-sm text-neutral-500 mb-2">Прототип, не продукт</p>
        <h1 className="text-2xl font-semibold text-neutral-900 mb-8">
          Личный кабинет — КПТ
        </h1>

        <div className="flex flex-col gap-3">
          <Link
            href="/patient"
            className="flex min-h-[56px] items-center justify-between rounded-lg border border-neutral-300 px-5 py-4 text-neutral-900 hover:bg-neutral-50"
          >
            <span className="font-medium">Кабинет пациента</span>
            <span className="text-neutral-400" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            href="/therapist"
            className="flex min-h-[56px] items-center justify-between rounded-lg border border-neutral-300 px-5 py-4 text-neutral-900 hover:bg-neutral-50"
          >
            <span className="font-medium">Кабинет терапевта</span>
            <span className="text-neutral-400" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          Переключение между кабинетами — обычная ссылка, без входа и ролей.
          Данные не сохраняются между перезагрузками страницы.
        </p>
      </div>
    </main>
  );
}
