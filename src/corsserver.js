const express = require('express');
const fetch = require('node-fetch'); // Install via npm: npm install node-fetch
const app = express();
const port = 3001;

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

const GOOGLE_API_KEY = "AIzaSyBkXK0NB0OCnJz4V8WCSi97KZDbK8wln3k";

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  const apiUrl = `${YOUTUBE_API_URL}?part=snippet&type=video&maxResults=10&key=${GOOGLE_API_KEY}&q=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data); // Send the response to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
