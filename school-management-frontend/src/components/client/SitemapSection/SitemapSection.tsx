import SitemapLinks from "./SitemapLinks";


export default function SitemapSection() {

  return (

    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">


          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Website Navigation
          </span>


          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Sitemap
          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Find all important pages and sections of our school
            website from one place.
          </p>


        </div>



        <div className="mt-16">

          <SitemapLinks />

        </div>


      </div>


    </section>

  );
}