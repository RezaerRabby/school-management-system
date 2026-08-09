

// export default function Dashboard() {
//   return (
//     <main className="min-h-[calc(100vh-64px)] bg-slate-50 p-6">
//       {/* Page Header */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-slate-900">
//           Admin Dashboard
//         </h1>

//         <p className="mt-1 text-sm text-slate-500">
//           Welcome back! Here is an overview of your school.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//         {/* Stats cards */}
//       </div>

//       {/* Overview */}
//       <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
//         {/* Student Overview */}
//         <div className="min-h-[205px] rounded-xl border border-slate-200 bg-white p-5">
//           {/* Student Overview */}
//         </div>

//         {/* Teacher Overview */}
//         <div className="min-h-[205px] rounded-xl border border-slate-200 bg-white p-5">
//           {/* Teacher Overview */}
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
//         {/* Attendance */}
//         <div className="min-h-[380px] rounded-xl border border-slate-200 bg-white p-5">
//           {/* Attendance Overview */}
//         </div>

//         {/* Recent Activities */}
//         <div className="min-h-[380px] rounded-xl border border-slate-200 bg-white p-5">
//           {/* Recent Activities */}
//         </div>
//       </div>
//     </main>
//   );
// }











import StatsCards from "./StatsCards";
import StudentOverview from "./StudentOverview";
import TeacherOverview from "./TeacherOverview";
import AttendanceOverview from "./AttendanceOverview";
import RecentActivities from "./RecentActivities";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here is an overview of your school.
        </p>
      </div>

      {/* Statistics */}
      <StatsCards />

      {/* Overview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <StudentOverview />
        <TeacherOverview />
      </div>

      {/* Attendance + Activities */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AttendanceOverview />
        <RecentActivities />
      </div>
    </div>
  );
}