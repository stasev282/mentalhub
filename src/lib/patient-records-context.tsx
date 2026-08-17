"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { ThoughtRecord } from "./types";
import { getThoughtRecordsByPatient } from "./mock-data";
import { CURRENT_PATIENT_ID } from "./session";

/**
 * Записи, добавленные визардом в текущей сессии, живут только в
 * React-стейте этого провайдера. Перезагрузка страницы их стирает —
 * это осознанное поведение прототипа, не баг.
 */

type ContextValue = {
  records: ThoughtRecord[];
  addRecord: (record: ThoughtRecord) => void;
};

const PatientRecordsContext = createContext<ContextValue | null>(null);

export function PatientRecordsProvider({ children }: { children: ReactNode }) {
  const baseRecords = useMemo(() => getThoughtRecordsByPatient(CURRENT_PATIENT_ID), []);
  const [sessionRecords, setSessionRecords] = useState<ThoughtRecord[]>([]);

  const records = useMemo(
    () => [...sessionRecords, ...baseRecords],
    [sessionRecords, baseRecords]
  );

  function addRecord(record: ThoughtRecord) {
    setSessionRecords((current) => [record, ...current]);
  }

  const value = useMemo(() => ({ records, addRecord }), [records]);

  return (
    <PatientRecordsContext.Provider value={value}>{children}</PatientRecordsContext.Provider>
  );
}

export function usePatientRecords(): ContextValue {
  const context = useContext(PatientRecordsContext);
  if (!context) {
    throw new Error("usePatientRecords должен использоваться внутри PatientRecordsProvider");
  }
  return context;
}
