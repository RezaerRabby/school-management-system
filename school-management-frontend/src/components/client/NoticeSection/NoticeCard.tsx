// interface NoticeCardProps {
//   title: string;
//   date: string;
//   description: string;
// }

// export default function NoticeCard({
//   title,
//   date,
//   description,
// }: NoticeCardProps) {
//   return (
//     <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
//       <div className="bg-blue-600 px-6 py-3 text-white">
//         <span className="text-sm font-medium">{date}</span>
//       </div>

//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-gray-900">
//           {title}
//         </h3>

//         <p className="mt-4 leading-7 text-gray-600">
//           {description}
//         </p>

//         <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// }




import Link from "next/link";

interface NoticeCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
}

export default function NoticeCard({
  id,
  title,
  date,
  description,
}: NoticeCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="bg-blue-600 px-6 py-3 text-white">
        <span className="text-sm font-medium">
          {date}
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <Link
          href={`/notices/${id}`}
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Read More
        </Link>

      </div>

    </div>
  );
}