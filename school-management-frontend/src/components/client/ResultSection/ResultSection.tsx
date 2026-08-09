// "use client";


// import { useState } from "react";
// import ResultSearch from "./ResultSearch";
// import ResultTable from "./ResultTable";
// import ResultSummary from "./ResultSummary";


// const demoResult = {

//   name: "Mahir Hasan",

//   roll: "101",

//   className: "Class 8",

//   exam: "Final Examination 2026",

//   subjects: [

//     {
//       name: "Bangla",
//       marks: 85,
//     },

//     {
//       name: "English",
//       marks: 90,
//     },

//     {
//       name: "Mathematics",
//       marks: 95,
//     },

//     {
//       name: "Science",
//       marks: 88,
//     },

//   ],

//   grade: "A+",

//   gpa: "5.00",

// };



// export default function ResultSection() {


//   const [result, setResult] = useState<any>(null);



//   const handleSearch = () => {

//     setResult(demoResult);

//   };



//   return (

//     <section className="bg-gray-50 py-20">


//       <div className="mx-auto max-w-6xl px-6">



//         <div className="text-center">


//           <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
//             Student Service
//           </span>



//           <h1 className="mt-6 text-4xl font-bold text-gray-900">
//             Check Result
//           </h1>



//           <p className="mt-4 text-gray-600">
//             Enter your student ID to view examination result.
//           </p>



//         </div>




//         <div className="mt-12">


//           <ResultSearch
//             onSearch={handleSearch}
//           />


//         </div>





//         {result && (

//           <div className="mt-12 rounded-2xl bg-white p-8 shadow-md">


//             <div className="text-center">


//               <h2 className="text-3xl font-bold">
//                 {result.exam}
//               </h2>


//               <p className="mt-3 text-gray-600">
//                 Student Name: {result.name}
//               </p>


//               <p className="text-gray-600">
//                 Roll: {result.roll} | {result.className}
//               </p>


//             </div>



//             <ResultTable
//               subjects={result.subjects}
//             />



//             <ResultSummary
//               grade={result.grade}
//               gpa={result.gpa}
//             />


//           </div>

//         )}



//       </div>


//     </section>

//   );

// }







"use client";

import { useState } from "react";

import ResultSearch from "./ResultSearch";
import ResultTable from "./ResultTable";
import ResultSummary from "./ResultSummary";


const demoResult = {
  name: "Mahir Hasan",
  roll: "101",
  className: "Class 8",
  exam: "Final Examination 2026",

  subjects: [
    {
      name: "Bangla",
      marks: 85,
    },
    {
      name: "English",
      marks: 90,
    },
    {
      name: "Mathematics",
      marks: 95,
    },
    {
      name: "Science",
      marks: 88,
    },
  ],

  grade: "A+",
  gpa: "5.00",
};



export default function ResultSection() {


  const [result, setResult] = useState<typeof demoResult | null>(null);



  const handleSearch = (studentId: string) => {


    if (studentId) {

      // পরে এখানে Backend API call হবে
      setResult(demoResult);

    }

  };



  return (

    <section className="min-h-screen bg-gray-50 py-20">


      <div className="mx-auto max-w-6xl px-6">


        {/* Header */}

        <div className="text-center">


          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">

            Student Portal

          </span>



          <h1 className="mt-6 text-4xl font-bold text-gray-900">

            Check Result

          </h1>



          <p className="mt-4 text-gray-600">

            Enter your Student ID or Roll Number to check examination result.

          </p>


        </div>





        {/* Search */}

        <div className="mt-12">


          <ResultSearch

            onSearch={handleSearch}

          />


        </div>





        {/* Result */}

        {
          result && (

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">


              {/* Student Information */}

              <div className="text-center">


                <h2 className="text-3xl font-bold text-gray-900">

                  {result.exam}

                </h2>



                <p className="mt-4 text-gray-600">

                  Student Name: {result.name}

                </p>



                <p className="text-gray-600">

                  Roll: {result.roll} | {result.className}

                </p>


              </div>





              {/* Subject Result Table */}

              <ResultTable

                subjects={result.subjects}

              />





              {/* Summary */}

              <ResultSummary

                grade={result.grade}

                gpa={result.gpa}

              />



            </div>

          )
        }



      </div>


    </section>

  );

}