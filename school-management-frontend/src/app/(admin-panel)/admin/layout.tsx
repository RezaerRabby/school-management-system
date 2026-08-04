



import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      {/* Right Content */}
      <div className="ml-64 min-h-screen">
        <Header />

        <main className="p-6 bg-gray-100 min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </>
  );
}
