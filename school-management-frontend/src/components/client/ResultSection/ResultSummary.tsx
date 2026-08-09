// interface ResultSummaryProps {
//   grade: string;
//   gpa: string;
// }


// export default function ResultSummary({
//   grade,
//   gpa,
// }: ResultSummaryProps) {

//   return (

//     <div className="mt-8 grid gap-6 md:grid-cols-3">


//       <div className="rounded-xl bg-gray-100 p-6 text-center">

//         <p className="text-gray-500">
//           Grade
//         </p>

//         <h3 className="mt-2 text-3xl font-bold text-blue-600">
//           {grade}
//         </h3>

//       </div>



//       <div className="rounded-xl bg-gray-100 p-6 text-center">

//         <p className="text-gray-500">
//           GPA
//         </p>

//         <h3 className="mt-2 text-3xl font-bold text-green-600">
//           {gpa}
//         </h3>

//       </div>



//       <div className="rounded-xl bg-gray-100 p-6 text-center">

//         <p className="text-gray-500">
//           Status
//         </p>

//         <h3 className="mt-2 text-3xl font-bold text-green-600">
//           Passed
//         </h3>

//       </div>


//     </div>

//   );
// }



interface ResultSummaryProps {

  grade: string;

  gpa: string;

}


export default function ResultSummary({

  grade,

  gpa,

}: ResultSummaryProps) {


  return (

    <div className="mt-8 grid gap-6 md:grid-cols-3">


      <div className="rounded-xl bg-gray-100 p-6 text-center">

        <p className="text-gray-500">
          Grade
        </p>

        <h3 className="mt-2 text-3xl font-bold text-blue-600">
          {grade}
        </h3>

      </div>



      <div className="rounded-xl bg-gray-100 p-6 text-center">

        <p className="text-gray-500">
          GPA
        </p>

        <h3 className="mt-2 text-3xl font-bold text-green-600">
          {gpa}
        </h3>

      </div>



      <div className="rounded-xl bg-gray-100 p-6 text-center">

        <p className="text-gray-500">
          Status
        </p>

        <h3 className="mt-2 text-3xl font-bold text-green-600">
          Passed
        </h3>

      </div>


    </div>

  );

}
