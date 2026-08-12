import StatsCards from "./StatsCards";
import AttendanceOverview from "./AttendanceOverview";
import LeaveOverview from "./LeaveOverview";
import TasksOverview from "./TasksOverview";
import SalaryOverview from "./SalaryOverview";
import UpcomingEvents from "./UpcomingEvents";
import RecentNotices from "./RecentNotices";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Staff Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here is an overview of your activities.
        </p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AttendanceOverview />
        <LeaveOverview />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <TasksOverview />
        <SalaryOverview />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <UpcomingEvents />
        <RecentNotices />
      </div>
    </div>
  );
}