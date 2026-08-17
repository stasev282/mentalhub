"use client";

import { useState } from "react";
import { DISTORTION_OPTIONS, type ThoughtRecord } from "@/lib/types";
import { formatFullDateTime } from "@/lib/date";

type Props = {
  record: ThoughtRecord;
};

function FieldBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">{label}</p>
      {value ? (
        <p className="mt-1 text-neutral-900">{value}</p>
      ) : (
        <p className="mt-1 italic text-neutral-400">не заполнено</p>
      )}
    </div>
  );
}

function MoodBlock({
  label,
  moods,
}: {
  label: string;
  moods: { label: string; intensity: number }[];
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">{label}</p>
      {moods.length > 0 ? (
        <ul className="mt-1 flex flex-col gap-0.5">
          {moods.map((mood, index) => (
            <li key={`${mood.label}-${index}`} className="text-neutral-900">
              {mood.label} — {mood.intensity}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-1 italic text-neutral-400">не заполнено</p>
      )}
    </div>
  );
}

export default function ThoughtRecordCard({ record }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [distortions, setDistortions] = useState<string[]>(record.distortions);

  const beforeMoods = record.moods.filter((mood) => mood.phase === "before");
  const afterMoods = record.moods.filter((mood) => mood.phase === "after");

  function toggleDistortion(option: string) {
    setDistortions((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  }

  return (
    <div className="rounded-lg border border-neutral-200">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full min-h-[44px] items-center justify-between gap-4 px-4 py-3 text-left"
      >
        <span className="flex flex-col">
          <span className="text-sm text-neutral-500">{formatFullDateTime(record.createdAt)}</span>
          <span className="text-neutral-900">{record.situation || "Ситуация не заполнена"}</span>
        </span>
        <span className="shrink-0 text-neutral-400" aria-hidden="true">
          {expanded ? "▲" : "▼"}
        </span>
      </button>

      {expanded && (
        <div className="flex flex-col gap-4 border-t border-neutral-200 px-4 py-4">
          <FieldBlock label="1. Ситуация" value={record.situation} />
          <MoodBlock label="2. Эмоция и её сила (до)" moods={beforeMoods} />
          <FieldBlock label="3. Автоматическая мысль" value={record.automaticThought} />
          <FieldBlock label="4. Доводы за мысль" value={record.evidenceFor} />
          <FieldBlock label="5. Доводы против" value={record.evidenceAgainst} />
          <FieldBlock label="6. Сбалансированная мысль" value={record.balancedThought} />
          <MoodBlock label="7. Эмоция и её сила (после)" moods={afterMoods} />

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
              Когнитивные искажения
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {DISTORTION_OPTIONS.map((option) => {
                const selected = distortions.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleDistortion(option)}
                    className={`min-h-[36px] rounded-full border px-3 py-1.5 text-sm ${
                      selected
                        ? "border-neutral-700 bg-neutral-700 text-white"
                        : "border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-neutral-400">
              Теги искажений выбирает терапевт. Пациент их не видит и не отмечает сам.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
