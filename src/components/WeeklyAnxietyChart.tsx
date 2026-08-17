import type { DailyCheckin } from "@/lib/types";
import { CURRENT_WEEK_DATES, formatShortDate, formatWeekday } from "@/lib/date";

type Props = {
  checkins: DailyCheckin[];
};

const CHART_HEIGHT_PX = 160;

export default function WeeklyAnxietyChart({ checkins }: Props) {
  const byDate = new Map(checkins.map((checkin) => [checkin.date, checkin]));

  return (
    <div>
      <div
        className="grid grid-cols-7 items-end gap-2 sm:gap-3"
        style={{ height: `${CHART_HEIGHT_PX}px` }}
      >
        {CURRENT_WEEK_DATES.map((date) => {
          const checkin = byDate.get(date);
          const hasValue = checkin != null && checkin.anxiety !== null;

          return (
            <div key={date} className="flex h-full flex-col items-center justify-end">
              {hasValue ? (
                <>
                  <span className="mb-1 text-xs text-neutral-500">{checkin!.anxiety}</span>
                  <div
                    className="w-full rounded-t bg-neutral-400"
                    style={{ height: `${checkin!.anxiety}%` }}
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
                  aria-label="Нет отметки за день"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2 text-center text-xs text-neutral-500 sm:gap-3">
        {CURRENT_WEEK_DATES.map((date) => (
          <div key={date}>
            <div className="capitalize">{formatWeekday(date)}</div>
            <div>{formatShortDate(date)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
