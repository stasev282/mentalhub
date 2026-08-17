"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MoodRating } from "@/lib/types";
import { CURRENT_PATIENT_ID } from "@/lib/session";
import { usePatientRecords } from "@/lib/patient-records-context";
import Slider from "@/components/Slider";
import AutoTextarea from "@/components/AutoTextarea";
import StepProgress from "@/components/StepProgress";
import CrisisNotice from "@/components/CrisisNotice";

const TOTAL_STEPS = 7;

export default function NewThoughtRecordPage() {
  const router = useRouter();
  const { addRecord } = usePatientRecords();

  const [step, setStep] = useState(1);
  const [situation, setSituation] = useState("");
  const [moodLabel, setMoodLabel] = useState("");
  const [moodBefore, setMoodBefore] = useState(50);
  const [automaticThought, setAutomaticThought] = useState("");
  const [evidenceFor, setEvidenceFor] = useState("");
  const [evidenceAgainst, setEvidenceAgainst] = useState("");
  const [balancedThought, setBalancedThought] = useState("");
  const [moodAfter, setMoodAfter] = useState(50);

  const step6Filled = balancedThought.trim().length > 0;
  const blockedByStep6 = step === 6 && !step6Filled;
  const isLastStep = step === TOTAL_STEPS;

  function goBack() {
    setStep((current) => Math.max(1, current - 1));
  }

  function goNext() {
    if (blockedByStep6) return;
    setStep((current) => Math.min(TOTAL_STEPS, current + 1));
  }

  function finish() {
    const label = moodLabel.trim();
    const moods: MoodRating[] = label
      ? [
          { label, phase: "before", intensity: moodBefore },
          { label, phase: "after", intensity: moodAfter },
        ]
      : [];

    addRecord({
      id: crypto.randomUUID(),
      patientId: CURRENT_PATIENT_ID,
      createdAt: new Date().toISOString(),
      situation: situation.trim(),
      moods,
      automaticThought: automaticThought.trim(),
      evidenceFor: evidenceFor.trim(),
      evidenceAgainst: evidenceAgainst.trim(),
      balancedThought: balancedThought.trim(),
      distortions: [],
    });

    router.push("/patient");
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-10">
        <div className="mx-auto flex w-full max-w-md flex-col gap-6">
          <div className="flex items-center justify-between">
            <Link href="/patient" className="text-sm text-neutral-500 hover:text-neutral-700">
              Отмена
            </Link>
          </div>

          <StepProgress step={step} total={TOTAL_STEPS} />

          {step === 1 && (
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-neutral-900">Ситуация</h1>
              <p className="text-sm text-neutral-500">
                Кто, где, когда, что происходило.
              </p>
              <AutoTextarea
                value={situation}
                onChange={setSituation}
                placeholder="Опишите ситуацию своими словами"
              />
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-lg font-semibold text-neutral-900">Эмоция и её сила</h1>
                <p className="text-sm text-neutral-500">Что вы почувствовали в этой ситуации.</p>
              </div>
              <input
                type="text"
                value={moodLabel}
                onChange={(event) => setMoodLabel(event.target.value)}
                placeholder="Например: тревога, стыд, злость"
                className="min-h-[44px] w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none"
              />
              <Slider value={moodBefore} onChange={setMoodBefore} />
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-neutral-900">Автоматическая мысль</h1>
              <p className="text-sm text-neutral-500">Дословно, как звучало в голове.</p>
              <AutoTextarea
                value={automaticThought}
                onChange={setAutomaticThought}
                placeholder="Какая мысль промелькнула"
              />
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-neutral-900">Доводы за эту мысль</h1>
              <p className="text-sm text-neutral-500">Факты, которые её подтверждают, не мнения.</p>
              <AutoTextarea
                value={evidenceFor}
                onChange={setEvidenceFor}
                placeholder="Что подтверждает эту мысль"
              />
            </div>
          )}

          {step === 5 && (
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-neutral-900">Доводы против</h1>
              <p className="text-sm text-neutral-500">Факты, которые с ней не сходятся.</p>
              <AutoTextarea
                value={evidenceAgainst}
                onChange={setEvidenceAgainst}
                placeholder="Что не сходится с этой мыслью"
              />
            </div>
          )}

          {step === 6 && (
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-neutral-900">Сбалансированная мысль</h1>
              <p className="text-sm text-neutral-500">
                Формулировка, которая учитывает и то, и другое.
              </p>
              <AutoTextarea
                value={balancedThought}
                onChange={setBalancedThought}
                placeholder="Как можно сформулировать мысль иначе"
              />
            </div>
          )}

          {step === 7 && (
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-lg font-semibold text-neutral-900">Оцените эмоцию снова</h1>
                <p className="text-sm text-neutral-500">
                  {moodLabel.trim() ? `«${moodLabel.trim()}» сейчас.` : "Та же эмоция, что и в шаге 2."}
                </p>
              </div>
              <Slider value={moodAfter} onChange={setMoodAfter} />
            </div>
          )}
        </div>
      </div>

      <div
        className="sticky bottom-0 border-t border-neutral-200 bg-white px-4 py-3 sm:px-8"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex w-full max-w-md flex-col gap-3">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              className="min-h-[44px] flex-1 rounded-lg border border-neutral-300 text-base font-medium text-neutral-700 disabled:opacity-40"
            >
              Назад
            </button>
            {isLastStep ? (
              <button
                type="button"
                onClick={finish}
                className="min-h-[44px] flex-1 rounded-lg bg-neutral-800 text-base font-medium text-white hover:bg-neutral-700"
              >
                Готово
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                disabled={blockedByStep6}
                className="min-h-[44px] flex-1 rounded-lg bg-neutral-800 text-base font-medium text-white hover:bg-neutral-700 disabled:opacity-40"
              >
                Далее
              </button>
            )}
          </div>
          <CrisisNotice />
        </div>
      </div>
    </div>
  );
}
