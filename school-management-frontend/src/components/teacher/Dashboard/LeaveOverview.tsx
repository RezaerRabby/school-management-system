export default function LeaveOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Leave Overview
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Your current leave status
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-slate-50 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">20</p>
          <p className="mt-1 text-xs text-slate-500">Total</p>
        </div>

        <div className="rounded-lg bg-green-50 p-4 text-center">
          <p className="text-2xl font-bold text-green-600">4</p>
          <p className="mt-1 text-xs text-slate-500">Used</p>
        </div>

        <div className="rounded-lg bg-blue-50 p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">16</p>
          <p className="mt-1 text-xs text-slate-500">Remaining</p>
        </div>
      </div>
    </div>
  );
}