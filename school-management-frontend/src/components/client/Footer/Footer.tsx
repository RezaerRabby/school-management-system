import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";


export default function Footer() {

  return (
    <footer className="bg-gray-900 py-12 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">


        <div>

          <h2 className="text-2xl font-bold">
            Roventix School
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            Providing quality education with modern
            facilities and experienced teachers.
          </p>

        </div>



        <FooterLinks />



        <SocialLinks />


      </div>



      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">

        © 2026 Roventix School. All Rights Reserved.

      </div>


    </footer>
  );
}