export default function FeesOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Fees Overview
        </h2>

        <p className="text-sm text-slate-500">
          Current payment status
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-slate-500">
            Total Fees
          </span>

          <span className="text-sm font-semibold text-slate-800">
            ৳45,000
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-slate-500">
            Paid
          </span>

          <span className="text-sm font-semibold text-green-600">
            ৳36,500
          </span>
        </div>

        <div className="flex justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-medium text-slate-700">
            Pending
          </span>

          <span className="text-sm font-bold text-red-600">
            ৳8,500
          </span>
        </div>
      </div>
    </div>
  );
}