import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('http://localhost:5000/gallery');
        const data = await res.json();
        setImages(data || []);
      } catch (err) {
        console.error("Gallery fetch error:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-6">गैलरी</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <img
            key={img.public_id}
            src={img.secure_url}
            alt=""
            className="w-full h-64 object-cover rounded-md shadow"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
