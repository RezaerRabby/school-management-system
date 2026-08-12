import StatsCards from "./StatsCards";
import AttendanceOverview from "./AttendanceOverview";
import ClassOverview from "./ClassOverview";
import AssignmentsOverview from "./AssignmentsOverview";
import ExamsOverview from "./ExamsOverview";
import LeaveOverview from "./LeaveOverview";
import UpcomingClasses from "./UpcomingClasses";
import RecentNotices from "./RecentNotices";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Teacher Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here is an overview of your teaching activities.
        </p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AttendanceOverview />
        <ClassOverview />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AssignmentsOverview />
        <ExamsOverview />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <LeaveOverview />
        <UpcomingClasses />
      </div>

      <RecentNotices />
    </div>
  );
}