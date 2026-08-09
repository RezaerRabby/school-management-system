import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";


export default function ContactSection() {

  return (

    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">


          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Get In Touch
          </span>


          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Contact Us
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Have any questions? Feel free to contact us.
            We are always ready to help you.
          </p>


        </div>



        <div className="mt-16 grid gap-12 lg:grid-cols-2">


          <ContactInfo />


          <ContactForm />


        </div>



        <div className="mt-16">

          <GoogleMap />

        </div>


      </div>


    </section>

  );
}