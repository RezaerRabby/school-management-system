


import type { ReactNode } from "react";
import Sidebar from "@/components/student/Sidebar";

export default function StudentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
}