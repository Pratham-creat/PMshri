import React, { useState } from 'react';

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
    formData.append('upload_preset', 'Pmshri'); // must match the exact preset name
    formData.append('folder', 'pmshrigallery');

    setIsUploading(true);
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dpe8au3fl/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        setUploadedURL(data.secure_url);
      } else {
        console.error("Cloudinary response error:", data);
        alert('Upload failed. Please check Cloudinary configuration.');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. See console for details.');
    }

    setIsUploading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">गैलरी इमेज अपलोड करें</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 border p-2"
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
          <p className="text-green-700 mb-2">Upload सफल हुआ!</p>
          <img src={uploadedURL} alt="Uploaded" className="w-full max-w-md mx-auto rounded shadow" />
        </div>
      )}
    </div>
  );
};

export default Upload;
