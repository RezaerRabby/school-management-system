// import AdmissionCard from "./AdmissionCard";
// import AdmissionProcess from "./AdmissionProcess";
// import AdmissionFAQ from "./AdmissionFAQ";

// export default function AdmissionSection() {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="mx-auto max-w-7xl px-6">

//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold">
//             Admission
//           </h2>

//           <p className="mt-4 text-gray-600">
//             Join our school through a simple admission process.
//           </p>
//         </div>

//         <div className="grid gap-12 lg:grid-cols-2">
//           <AdmissionCard />
//           <AdmissionProcess />
//         </div>

//         <AdmissionFAQ />

//       </div>
//     </section>
//   );
// }


import AdmissionBanner from "./AdmissionBanner";
import AdmissionCard from "./AdmissionCard";
import AdmissionProcess from "./AdmissionProcess";
import AdmissionFAQ from "./AdmissionFAQ";

export default function AdmissionSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl space-y-20 px-6">
        <AdmissionBanner />

        <div className="grid gap-12 lg:grid-cols-2">
          <AdmissionCard />
          <AdmissionProcess />
        </div>

        <AdmissionFAQ />
      </div>
    </section>
  );
}