interface FAQItemProps {

  question: string;

  answer: string;

}



export default function FAQItem({

  question,

  answer,

}: FAQItemProps) {


  return (

    <div className="border-b py-6 last:border-none">


      <h3 className="text-xl font-bold text-gray-900">

        {question}

      </h3>



      <p className="mt-3 leading-7 text-gray-600">

        {answer}

      </p>


    </div>

  );

}