export default function AdmissionCard() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-blue-600">
        Admission Open
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        Admissions are now open for the new academic session.
        Apply online and become a part of our learning community.
      </p>

      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
}