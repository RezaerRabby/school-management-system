const steps = [
  "Fill Up Application Form",
  "Submit Required Documents",
  "Admission Test / Interview",
  "Complete Admission",
];

export default function AdmissionProcess() {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Admission Process
      </h2>

      <div className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4 rounded-xl bg-gray-100 p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {index + 1}
            </div>

            <p className="font-medium">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}