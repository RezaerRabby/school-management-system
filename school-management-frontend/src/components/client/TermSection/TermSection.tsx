import TermsContent from "./TermsContent";


export default function TermsSection() {

  return (

    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-5xl px-6">


        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Legal Information
          </span>


          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Please read our terms and conditions carefully
            before using our school services.
          </p>


        </div>



        <div className="mt-16 rounded-2xl bg-white p-8 shadow-md md:p-12">

          <TermsContent />

        </div>


      </div>

    </section>

  );
}