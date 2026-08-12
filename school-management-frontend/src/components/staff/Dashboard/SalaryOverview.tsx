export default function SalaryOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Salary Overview
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Current salary information
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-slate-500">
            Basic Salary
          </span>

          <span className="text-sm font-semibold text-slate-800">
            ৳30,000
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-slate-500">
            Allowance
          </span>

          <span className="text-sm font-semibold text-slate-800">
            ৳5,000
          </span>
        </div>

        <div className="flex justify-between border-t border-slate-100 pt-4">
          <span className="font-medium text-slate-700">
            Net Salary
          </span>

          <span className="font-bold text-blue-600">
            ৳35,000
          </span>
        </div>
      </div>
    </div>
  );
}