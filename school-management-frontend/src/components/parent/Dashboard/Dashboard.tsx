import StatsCards from "./StatsCards";
import ChildrenOverview from "./ChildrenOverview";
import AttendanceOverview from "./AttendanceOverview";
import ResultsOverview from "./ResultsOverview";
import FeesOverview from "./FeesOverview";
import UpcomingEvents from "./UpcomingEvents";
import RecentNotices from "./RecentNotices";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Parent Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here is an overview of your children.
        </p>
      </div>

      {/* Statistics */}
      <StatsCards />

      {/* Children + Attendance */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ChildrenOverview />
        <AttendanceOverview />
      </div>

      {/* Results + Fees */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ResultsOverview />
        <FeesOverview />
      </div>

      {/* Events + Notices */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <UpcomingEvents />
        <RecentNotices />
      </div>
    </div>
  );
}