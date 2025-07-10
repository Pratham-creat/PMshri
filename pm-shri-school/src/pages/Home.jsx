import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="w-full">
      {/* स्कूल की छवि */}
      <img
        src="/school-cover.jpeg" // अपना वास्तविक इमेज पथ यहाँ लगाएं
        alt="पीएम श्री विद्यालय भवन"
        className="w-full h-[300px] md:h-[450px] object-cover"
      />

      {/* स्वागत और विवरण */}
      <div className="text-center px-4 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          पीएम श्री शासकीय उच्चतर माध्यमिक विद्यालय
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 mt-1">
          आदेगांव, तहसील लखनादौन, जिला सिवनी (म.प्र.)
        </h2>

        {/* सजावटी लाइन */}
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 mb-6 rounded"></div>

        {/* विवरण */}
        <p className="text-gray-700 text-md sm:text-lg leading-relaxed px-4">
          पीएम श्री विद्यालय एक उत्कृष्ट शासकीय शिक्षण संस्था है, जो विद्यार्थियों के सर्वांगीण विकास के लिए समर्पित है। यह विद्यालय गुणवत्तापूर्ण शिक्षा, नैतिक मूल्यों और समर्पित शिक्षकों के माध्यम से विद्यार्थियों को उज्ज्वल भविष्य की ओर मार्गदर्शन करता है।
        </p>

        {/* हमारे बारे में बटन */}
        <Link
          to="/about"
          className="inline-block mt-6 px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300"
        >
          विद्यालय के बारे में
        </Link>
      </div>
    </section>
  );
};

export default Home;
