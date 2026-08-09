// interface Subject {
//   name: string;
//   marks: number;
// }


// interface ResultTableProps {
//   subjects: Subject[];
// }


// export default function ResultTable({
//   subjects,
// }: ResultTableProps) {

//   return (

//     <div className="mt-8 overflow-x-auto">


//       <table className="w-full border-collapse">


//         <thead>

//           <tr className="bg-blue-600 text-white">

//             <th className="p-3 text-left">
//               Subject
//             </th>


//             <th className="p-3">
//               Marks
//             </th>

//           </tr>

//         </thead>



//         <tbody>

//           {subjects.map((subject) => (

//             <tr
//               key={subject.name}
//               className="border-b"
//             >

//               <td className="p-3">
//                 {subject.name}
//               </td>


//               <td className="p-3 text-center">
//                 {subject.marks}
//               </td>


//             </tr>

//           ))}


//         </tbody>


//       </table>


//     </div>

//   );
// }



interface Subject {
  name: string;
  marks: number;
}


interface ResultTableProps {
  subjects: Subject[];
}


export default function ResultTable({
  subjects,
}: ResultTableProps) {

  return (
    <div className="mt-8 overflow-x-auto">

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-blue-600 text-white">

            <th className="p-3 text-left">
              Subject
            </th>

            <th className="p-3">
              Marks
            </th>

          </tr>

        </thead>


        <tbody>

          {subjects.map((subject) => (

            <tr
              key={subject.name}
              className="border-b"
            >

              <td className="p-3">
                {subject.name}
              </td>


              <td className="p-3 text-center">
                {subject.marks}
              </td>


            </tr>

          ))}

        </tbody>


      </table>

    </div>
  );
}