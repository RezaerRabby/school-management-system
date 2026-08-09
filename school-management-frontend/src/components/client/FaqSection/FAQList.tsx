import FAQItem from "./FAQItem";


const faqData = [

  {
    question: "How can I apply for admission?",
    answer:
      "You can apply for admission by filling out the admission form online or visiting our school office."
  },


  {
    question: "Which classes are available?",
    answer:
      "We provide education from Play Group to Higher Secondary level."
  },


  {
    question: "How can parents check student results?",
    answer:
      "Parents can check results using the student ID from our online result portal."
  },


  {
    question: "Does the school provide transport facilities?",
    answer:
      "Yes, transport facilities are available for students in selected areas."
  },


  {
    question: "How can I contact the school?",
    answer:
      "You can contact us through phone, email, or by visiting the school campus."
  },

];



export default function FAQList() {


  return (

    <div>

      {
        faqData.map((item, index)=>(

          <FAQItem

            key={index}

            question={item.question}

            answer={item.answer}

          />

        ))
      }

    </div>

  );

}