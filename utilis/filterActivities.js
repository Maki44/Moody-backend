const calculateDistance = require("./calculateDistance");
const filterActivities = (activities, user) => {
  const filteredActivities = activities.filter((activity) => {
    const latA = activity.lat;
    const lngA = activity.lng;
    const latB = user.lat;
    const lngB = user.lng;
    const distance = calculateDistance(latA, lngA, latB, lngB);
    return distance <= 10;
  });
  return filteredActivities;
};

module.exports = filterActivities;
