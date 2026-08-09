"use client";

export default function SidebarFooter() {
  const handleLogout = () => {
    // পরে এখানে JWT/token remove করবে

    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="border-t border-gray-200 p-4">
      <button
        type="button"
        onClick={handleLogout}
        className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
      >
        Logout
      </button>
    </div>
  );
}