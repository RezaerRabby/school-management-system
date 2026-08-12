export default function FeesOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Fees Overview
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Current payment status
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-slate-500">
            Total Fees
          </span>

          <span className="font-semibold">
            ৳40,000
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-slate-500">
            Paid
          </span>

          <span className="font-semibold text-green-600">
            ৳32,000
          </span>
        </div>

        <div className="flex justify-between border-t border-slate-100 pt-4">
          <span className="font-medium">
            Pending
          </span>

          <span className="font-bold text-red-600">
            ৳8,000
          </span>
        </div>
      </div>
    </div>
  );
}