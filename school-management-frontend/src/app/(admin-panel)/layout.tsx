
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="ml-[240px] min-h-[calc(100vh-54px)] pt-[54px]">
        <div className="min-h-[calc(100vh-110px)] px-5 py-5">
          {children}
        </div>
      </main>

      {/* Footer */}
      <div className="ml-[240px]">
        <Footer />
      </div>
    </div>
  );
}