import Link from "next/link";

export default function HelpPage() {
  return (
    <main className="flex flex-1 flex-col px-6 py-8 max-w-md mx-auto w-full">
      <Link href="/patient" className="text-sm text-neutral-500 mb-6">
        ← Назад в кабинет
      </Link>

      <h1 className="text-xl font-semibold text-neutral-900 mb-4">
        Помощь сейчас
      </h1>

      <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-neutral-700 text-sm leading-relaxed">
        <p className="mb-3">
          Это экран-заглушка для прототипа. В рабочей версии здесь будут
          контакты кризисных служб и понятный порядок действий при остром
          состоянии.
        </p>
        <p>
          Это приложение не оказывает экстренную помощь и не заменяет её. При
          остром состоянии обратитесь в кризисную службу или к врачу очно.
        </p>
      </div>
    </main>
  );
}
