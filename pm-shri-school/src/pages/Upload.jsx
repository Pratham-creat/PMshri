import React from "react";
import { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadedURL, setUploadedURL] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://pmshri-6.onrender.com/upload', {
      method: 'POST',
      body: formData,
    });


    setIsUploading(true);
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dpe8au3fl/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      setUploadedURL(data.secure_url);
    } catch (error) {
      alert('Upload failed.');
      console.error(error);
    }
    setIsUploading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4 ">Upload Gallery Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 border-2 "
      />
      <br />
      <button
        onClick={handleUpload}
        disabled={isUploading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {isUploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {uploadedURL && (
        <div className="mt-6">
          <p className="text-green-700 mb-2">Upload successful!</p>
          <img
            src={uploadedURL}
            alt="Uploaded"
            className="w-full max-w-md mx-auto rounded shadow"
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
