export default function AttendanceOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Attendance Overview
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Your current attendance
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Present</span>
            <span className="font-medium">94%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[94%] rounded-full bg-blue-600" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Absent</span>
            <span className="font-medium">4%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[4%] rounded-full bg-red-500" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Late</span>
            <span className="font-medium">2%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[2%] rounded-full bg-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}