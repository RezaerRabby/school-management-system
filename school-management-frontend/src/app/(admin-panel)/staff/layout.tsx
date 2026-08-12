import type { ReactNode } from "react";
import Sidebar from "@/components/staff/Sidebar";

export default function StaffDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className=" min-h-screen">
        {children}
      </main>
    </div>
  );
}