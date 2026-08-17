import Link from "next/link";

export default function CrisisNotice() {
  return (
    <p className="text-xs leading-relaxed text-neutral-500">
      Приложение не оказывает экстренную помощь и не заменяет её. При остром
      состоянии обратитесь в кризисную службу.{" "}
      <Link href="/help" className="underline hover:text-neutral-700">
        Помощь сейчас
      </Link>
    </p>
  );
}
