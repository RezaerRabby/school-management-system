import StatsCards from "./StatsCards";
import AttendanceOverview from "./AttendanceOverview";
import ResultsOverview from "./ResultsOverview";
import AssignmentsOverview from "./AssignmentsOverview";
import FeesOverview from "./FeesOverview";
import UpcomingClasses from "./UpcomingClasses";
import UpcomingEvents from "./UpcomingEvents";
import RecentNotices from "./RecentNotices";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Student Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here is an overview of your academic activities.
        </p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AttendanceOverview />
        <ResultsOverview />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AssignmentsOverview />
        <FeesOverview />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <UpcomingClasses />
        <UpcomingEvents />
      </div>

      <RecentNotices />
    </div>
  );
}