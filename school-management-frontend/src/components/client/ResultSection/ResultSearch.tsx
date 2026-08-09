// "use client";

// import { useState } from "react";

// interface ResultSearchProps {
//   onSearch: (studentId: string) => void;
// }

// export default function ResultSearch({
//   onSearch,
// }: ResultSearchProps) {

//   const [studentId, setStudentId] = useState("");


//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (studentId) {
//       onSearch(studentId);
//     }
//   };


//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="rounded-2xl bg-white p-8 shadow-md"
//     >

//       <h3 className="text-2xl font-bold text-gray-900">
//         Search Student Result
//       </h3>


//       <div className="mt-6 flex flex-col gap-4 md:flex-row">


//         <input
//           type="text"
//           placeholder="Enter Student ID / Roll Number"
//           value={studentId}
//           onChange={(e) => setStudentId(e.target.value)}
//           className="flex-1 rounded-lg border p-3 outline-none focus:border-blue-600"
//         />


//         <button
//           type="submit"
//           className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
//         >
//           Search
//         </button>


//       </div>

//     </form>
//   );
// }






"use client";


import { useState } from "react";


interface ResultSearchProps {

  onSearch: (studentId:string)=>void;

}



export default function ResultSearch({

  onSearch,

}:ResultSearchProps){


  const [studentId,setStudentId]=useState("");



  const handleSubmit=(e:React.FormEvent)=>{

    e.preventDefault();


    if(studentId){

      onSearch(studentId);

    }

  };



  return (

    <form

      onSubmit={handleSubmit}

      className="rounded-2xl bg-white p-8 shadow-md"

    >


      <h3 className="text-2xl font-bold">

        Search Student Result

      </h3>



      <div className="mt-6 flex flex-col gap-4 md:flex-row">


        <input

          type="text"

          placeholder="Enter Student ID / Roll Number"

          value={studentId}

          onChange={(e)=>setStudentId(e.target.value)}

          className="flex-1 rounded-lg border p-3"

        />



        <button

          type="submit"

          className="rounded-lg bg-blue-600 px-8 py-3 text-white"

        >

          Search

        </button>


      </div>


    </form>

  );

}





