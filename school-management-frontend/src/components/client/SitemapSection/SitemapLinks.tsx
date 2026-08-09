import Link from "next/link";


const sitemapLinks = [
  {
    title: "Main Pages",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Admission",
        href: "/admission",
      },
      {
        name: "Academic",
        href: "/academic",
      },
      {
        name: "Teachers",
        href: "/teachers",
      },
    ],
  },

  {
    title: "Information",
    links: [
      {
        name: "Notices",
        href: "/notices",
      },
      {
        name: "Events",
        href: "/events",
      },
      {
        name: "Gallery",
        href: "/gallery",
      },
      {
        name: "Contact",
        href: "/contact",
      },
      {
        name: "Result Check",
        href: "/results/check",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Terms & Conditions",
        href: "/terms",
      },
      {
        name: "FAQ",
        href: "/faq",
      },
    ],
  },
];


export default function SitemapLinks() {

  return (

    <div className="grid gap-8 md:grid-cols-3">

      {sitemapLinks.map((section) => (

        <div
          key={section.title}
          className="rounded-2xl bg-white p-6 shadow-md"
        >

          <h3 className="text-xl font-bold text-gray-900">
            {section.title}
          </h3>


          <ul className="mt-5 space-y-3">

            {section.links.map((link) => (

              <li key={link.href}>

                <Link
                  href={link.href}
                  className="text-gray-600 transition hover:text-blue-600"
                >
                  → {link.name}
                </Link>

              </li>

            ))}

          </ul>


        </div>

      ))}

    </div>

  );
}