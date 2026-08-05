// import "./globals.css";

// export const metadata = {
//   title: "School Management System",
//   description: "School ERP",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}