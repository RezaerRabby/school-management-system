import PolicyContent from "./PolicyContent";


export default function PrivacyPolicySection() {

  return (

    <section className="min-h-screen bg-gray-50 py-20">


      <div className="mx-auto max-w-5xl px-6">


        {/* Header */}

        <div className="text-center">


          <h1 className="text-4xl font-bold text-gray-900">

            Privacy Policy

          </h1>


          <p className="mt-4 text-gray-600">

            Learn how our school collects, uses, and protects your information.

          </p>


        </div>





        {/* Content */}

        <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">


          <PolicyContent />


        </div>



      </div>


    </section>

  );

}