type Props = {
  step: number;
  total: number;
};

export default function StepProgress({ step, total }: Props) {
  return (
    <div>
      <p className="text-sm text-neutral-500">
        Шаг {step} из {total}
      </p>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full ${
              index < step ? "bg-neutral-700" : "bg-neutral-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
