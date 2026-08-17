import type { Gad7Response } from "@/lib/types";

type Props = {
  responses: Gad7Response[];
};

const CHART_HEIGHT_PX = 160;
const GAD7_MAX = 21;

export default function Gad7Chart({ responses }: Props) {
  const sorted = [...responses].sort((a, b) => a.weekOfCourse - b.weekOfCourse);

  return (
    <div>
      <div
        className="grid items-end gap-2 sm:gap-3"
        style={{
          height: `${CHART_HEIGHT_PX}px`,
          gridTemplateColumns: `repeat(${sorted.length}, minmax(0, 1fr))`,
        }}
      >
        {sorted.map((response) => {
          const hasValue = response.total !== null;
          const heightPercent = hasValue ? ((response.total as number) / GAD7_MAX) * 100 : 0;

          return (
            <div
              key={response.weekOfCourse}
              className="flex h-full flex-col items-center justify-end"
            >
              {hasValue ? (
                <>
                  <span className="mb-1 text-xs text-neutral-500">{response.total}</span>
                  <div
                    className="w-full rounded-t bg-neutral-400"
                    style={{ height: `${heightPercent}%` }}
                  />
                </>
              ) : (
                <div
                  className="w-full flex-1 rounded-t border border-dashed border-neutral-300"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgb(229 229 229) 0, rgb(229 229 229) 4px, transparent 4px, transparent 10px)",
                  }}
                  role="img"
                  aria-label="Опросник не пройден на этой неделе"
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        className="mt-2 grid gap-2 text-center text-xs text-neutral-500 sm:gap-3"
        style={{ gridTemplateColumns: `repeat(${sorted.length}, minmax(0, 1fr))` }}
      >
        {sorted.map((response) => (
          <div key={response.weekOfCourse}>Неделя {response.weekOfCourse}</div>
        ))}
      </div>

      <p className="mt-3 text-xs text-neutral-400">
        Сумма баллов по опроснику GAD-7, шкала 0–{GAD7_MAX}. Пороговые значения и
        трактовка результата в прототипе не выводятся.
      </p>
    </div>
  );
}
