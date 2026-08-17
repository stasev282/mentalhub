import type { HomeworkItem } from "@/lib/types";

type Props = {
  items: HomeworkItem[];
};

export default function HomeworkList({ items }: Props) {
  if (items.length === 0) {
    return <p className="text-sm text-neutral-400">Домашние задания не назначены.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-1 rounded-lg border border-neutral-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-neutral-900">{item.title}</span>
          <span className="text-sm text-neutral-500">{item.progressLabel}</span>
        </li>
      ))}
    </ul>
  );
}
