const axios = require("axios");
require("dotenv").config();
const getPlacePhoto = async (photoReference) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${process.env.API_KEY}`
  );

  return response.request["_redirectable"]["_currentUrl"];
};
module.exports = getPlacePhoto;
