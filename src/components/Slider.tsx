"use client";

type Props = {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export default function Slider({ label, value, onChange, min = 0, max = 100 }: Props) {
  return (
    <div>
      {label && (
        <label className="mb-3 block text-sm font-medium text-neutral-700">{label}</label>
      )}
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-11 w-full accent-neutral-700"
          aria-label={label}
        />
        <span className="w-10 shrink-0 text-right text-lg font-medium tabular-nums text-neutral-900">
          {value}
        </span>
      </div>
    </div>
  );
}
