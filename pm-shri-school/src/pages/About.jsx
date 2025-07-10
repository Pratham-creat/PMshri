import React from "react";

import { useEffect, useState } from 'react';

const About = () => {
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    fetch('/src/assets/about.txt')
      .then((res) => res.text())
      .then((text) => setAboutText(text))
      .catch((err) => console.error('Error loading about text:', err));
  }, []);

  return (
    <section className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-4">
        हमारे विद्यालय के बारे में
      </h1>

      <p className="text-gray-800 whitespace-pre-line text-justify leading-relaxed">
        {aboutText}
      </p>
    </section>
  );
};

export default About;


