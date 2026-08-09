// import Mission from "./Mission";
// import Vision from "./Vision";
// import Features from "./Features";

// export default function AboutSection() {
//   return (
//     <section>
//       <Mission />
//       <Vision />
//       <Features />
//     </section>
//   );
// }


import Mission from "./Mission";
import Vision from "./Vision";
import Features from "./Features";


export default function AboutSection() {

  return (

    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            About Our School
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-gray-600">
            We provide quality education with modern
            facilities and experienced teachers.
          </p>

        </div>



        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <Mission />

          <Vision />

          <Features />

        </div>


      </div>

    </section>

  );
}