const faqs = [
  {
    question: "Who can apply?",
    answer: "Students meeting the eligibility criteria can apply.",
  },
  {
    question: "Is there an admission test?",
    answer: "Yes, depending on the class level.",
  },
  {
    question: "Can I apply online?",
    answer: "Yes, online application is available.",
  },
];

export default function AdmissionFAQ() {
  return (
    <section className="mt-20">
      <h2 className="text-center text-3xl font-bold">
        Admission FAQ
      </h2>

      <div className="mt-10 space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h3 className="font-bold">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}