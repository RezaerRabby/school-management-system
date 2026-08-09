"use client";

import { useState } from "react";


export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully");
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 shadow-md"
    >

      <h3 className="text-2xl font-bold text-gray-900">
        Send Us A Message
      </h3>


      <div className="mt-6 space-y-5">


        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
        />


        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
        />


        <textarea
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
        />


        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Send Message
        </button>


      </div>

    </form>
  );
}