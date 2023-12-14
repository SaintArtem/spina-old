const axios = require('axios');

const GOOGLE_API_KEY = 'AIzaSyC8X68xuLMaL9YA_FeTgjwwwCE-aIZGZBE';
const PLACE_ID = 'ChIJm8-YVH7F1EARe2xgvEhC-Yw';

module.exports = async (req, res) => {
      try {
            const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${GOOGLE_API_KEY}`;

            const response = await axios.get(apiUrl, { language: 'uk', });

            if (response.data.result && response.data.result.reviews) {
                  const reviews = response.data.result.reviews;
                  res.status(200).json(reviews);
            } else {
                  res.status(404).json({ error: 'Reviews not found' });
            }
      } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
      }
};