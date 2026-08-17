"use client";

import { useState } from "react";
import Slider from "./Slider";

type Props = {
  initialValue: number | null;
};

export default function TodayCheckin({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue ?? 50);
  const [saved, setSaved] = useState(initialValue !== null);

  return (
    <div className="rounded-lg border border-neutral-200 p-4">
      <Slider
        label="Тревога сегодня"
        value={value}
        onChange={(next) => {
          setValue(next);
          setSaved(false);
        }}
      />
      <button
        type="button"
        onClick={() => setSaved(true)}
        className="mt-4 min-h-[44px] rounded-lg bg-neutral-800 px-5 text-sm font-medium text-white hover:bg-neutral-700"
      >
        Сохранить
      </button>
      {saved && (
        <p className="mt-2 text-xs text-neutral-400">
          Сохранено в этой сессии. Данные не отправляются на сервер и теряются при
          перезагрузке страницы.
        </p>
      )}
    </div>
  );
}
