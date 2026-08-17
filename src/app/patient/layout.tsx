import type { ReactNode } from "react";
import { PatientRecordsProvider } from "@/lib/patient-records-context";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <PatientRecordsProvider>
      <div className="flex flex-1 flex-col">{children}</div>
    </PatientRecordsProvider>
  );
}
