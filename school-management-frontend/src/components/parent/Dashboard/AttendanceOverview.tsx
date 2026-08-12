export default function AttendanceOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Attendance Overview
        </h2>

        <p className="text-sm text-slate-500">
          Current attendance statistics
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-600">Present</span>
            <span className="font-medium text-slate-800">94%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[94%] rounded-full bg-blue-600" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-600">Absent</span>
            <span className="font-medium text-slate-800">4%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[4%] rounded-full bg-red-500" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-600">Late</span>
            <span className="font-medium text-slate-800">2%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[2%] rounded-full bg-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}