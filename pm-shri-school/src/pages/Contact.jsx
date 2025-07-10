import React from "react";

const Contact = () => {
  return (
    <section className="p-6 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 text-center">संपर्क जानकारी</h2>

      <div className="bg-white shadow-md rounded-lg p-6 text-lg leading-relaxed space-y-4 border border-blue-100">
        <p><span className="font-semibold text-blue-700">पता:</span> ADEGAON, तहसील - लखनादौन, जिला - सिवनी, मध्यप्रदेश, पिन - 480887</p>

        <p><span className="font-semibold text-blue-700">फ़ोन:</span> +91-96691 95787</p>

        <p><span className="font-semibold text-blue-700">ईमेल:</span> link2hssadegaon@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
