const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// Route to get images from folder
app.get('/gallery', async (req, res) => {
  try {
    const result = await cloudinary.search
      .expression('folder:pmshrigallery') // your folder name
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();
    res.json(result.resources);
  } catch (err) {
    console.error('Error fetching images:', err);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});

app.delete('/delete-image/:public_id', async (req, res) => {
  const { public_id } = req.params;

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ success: false, error: 'Failed to delete image' });
  }
});

app.get("/", (req, res) => {
  res.send("🎉 PM Shri School Backend is running successfully!");
});

