import FAQList from "./FAQList";


export default function FAQSection() {


  return (

    <section className="min-h-screen bg-gray-50 py-20">


      <div className="mx-auto max-w-5xl px-6">


        {/* Header */}

        <div className="text-center">


          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">

            FAQ

          </span>



          <h1 className="mt-6 text-4xl font-bold text-gray-900">

            Frequently Asked Questions

          </h1>



          <p className="mt-4 text-gray-600">

            Find answers to common questions about our school.

          </p>


        </div>





        {/* FAQ List */}

        <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">


          <FAQList />


        </div>



      </div>


    </section>

  );

}