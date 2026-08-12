import { ChevronRight } from "lucide-react";

const children = [
  {
    name: "Mahin Hasan",
    className: "Class 8",
    section: "Section A",
    roll: "12",
  },
  {
    name: "Mahiya Hasan",
    className: "Class 5",
    section: "Section B",
    roll: "08",
  },
];

export default function ChildrenOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          My Children
        </h2>

        <p className="text-sm text-slate-500">
          Overview of your children
        </p>
      </div>

      <div className="space-y-3">
        {children.map((child) => (
          <div
            key={child.name}
            className="flex items-center justify-between rounded-lg border border-slate-100 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                {child.name.charAt(0)}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {child.name}
                </h3>

                <p className="text-xs text-slate-500">
                  {child.className} • {child.section} • Roll {child.roll}
                </p>
              </div>
            </div>

            <ChevronRight size={18} className="text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}