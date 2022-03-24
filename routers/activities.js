const { Router } = require("express");
const axios = require("axios");
const authMiddleware = require("../auth/middleware");
const UserMood = require("../models").userMood;
const Mood = require("../models").mood;
const User = require("../models").user;
const Activity = require("../models").activity;
const UserActivity = require("../models").userActivity;
const Passion = require("../models").passion;
const filterActivities = require("../utilis/filterActivities");
const getPlacePhoto = require("../utilis/getPlacePhoto");
require("dotenv").config();
const router = new Router();

router.post("/:id", authMiddleware, async (req, res, next) => {
  // Mood Id passed as parameter
  const { id } = req.params;
  const userId = req.user.id;
  const { minAge, maxAge, maxPersons, lat, lng, placeName, photo } = req.body;
  console.log("req, body", req.body);
  try {
    // find the mood and the user
    const mood = await Mood.findByPk(parseInt(id));
    const user = await User.findByPk(userId);
    if (!mood) {
      return res.status(404).send({ message: "Activity does not exist" });
    }
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.API_KEY}`
    );
    // Delete existing activities
    const userActivityAll = await UserActivity.findAll({
      where: {
        userId,
      },
    });
    console.log("user Activity", userActivityAll);
    userActivityAll.forEach(async (userActivity) => {
      const { activityId } = userActivity;
      const previousAddedActivity = await Activity.findByPk(activityId);
      await user.removeActivity(previousAddedActivity);
    });

    const address = response.data.results[0].formatted_address;
    // Create Activity
    const activity = await Activity.create({
      lat,
      lng,
      address,
      placeName,
      minAge,
      maxAge,
      maxPersons,
      moodId: id,
      photo,
    });
    // Add activity to user
    await user.addActivity(activity);
    const activityId = activity.dataValues.id;
    console.log("activity id", activityId);
    const userActivity = await UserActivity.findOne({
      where: {
        activityId,
        userId,
      },
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        { model: Activity, include: [Mood] },
      ],
    });

    res.json(userActivity);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/join/:id", authMiddleware, async (req, res, next) => {
  try {
    // id is sent from client is Activity Id
    const { id } = req.params;
    // Check Activity with the give Id
    const activity = await Activity.findByPk(parseInt(id));
    if (!activity) {
      return res.status(404).send("Activity Not found");
    }
    const activityId = activity.dataValues.id;
    const userId = req.user.id;
    // Get the user From DB;
    const user = await User.findByPk(userId);

    // Delete existing activities
    const userActivityAll = await UserActivity.findAll({
      where: {
        userId,
      },
    });
    console.log("user Activity", userActivityAll);
    userActivityAll.forEach(async (userActivity) => {
      const { activityId } = userActivity;
      const previousAddedActivity = await Activity.findByPk(activityId);
      await user.removeActivity(previousAddedActivity);
    });
    // Add Activity to user
    await user.addActivity(activity);
    // get UserActivity and send to client
    const userActivity = await UserActivity.findOne({
      where: {
        userId,
        activityId,
      },
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        { model: Activity, include: [Mood] },
      ],
    });
    res.json(userActivity);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/disjoin/:id", authMiddleware, async (req, res) => {
  try {
    // id is sent from client is Activity Id
    const { id } = req.params;
    // Check Activity with the give Id
    const activity = await Activity.findByPk(parseInt(id));
    if (!activity) {
      return res.status(404).send("Activity Not found");
    }
    const userId = req.user.id;
    // Get the user From DB;
    const user = await User.findByPk(userId);
    // delete Activity
    await user.removeActivity(activity);
    const newActivity = await Activity.findByPk(parseInt(id), {
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        { model: Mood },
      ],
    });
    res.json(newActivity);
  } catch (error) {
    console.log(error);
  }
});
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const user = req.user;
    const activities = await Activity.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          include: [Passion],
        },
        Mood,
      ],
    });
    const activitiesFiltered = filterActivities(activities, user);
    res.send(activitiesFiltered);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/places", async (req, res) => {
  try {
    const { name, lat, lng } = req.query;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=1500&type=${name}&key=${process.env.API_KEY}`
    );
    const results = response.data.results;
    console.log("results", results);
    const promises = results.map(async (result) => {
      const { geometry, name, opening_hours, photos, rating } = result;
      let photo = "";
      if (photos && photo === "") {
        const photoReference = photos[0]["photo_reference"];
        photo = await getPlacePhoto(photoReference);
      }
      return {
        location: geometry.location,
        name,
        opening_hours,
        rating,
        photo,
      };
    });
    const filteredData = await Promise.all(promises);
    const sortByRating = filteredData.sort((a, b) => b.rating - a.rating);
    console.log("sorted format", sortByRating);

    //res.send(JSON.stringify(response.data));
    res.send(sortByRating);
  } catch (error) {
    console.log(error);
  }
});

router.get("/users/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(parseInt(id), {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          include: [Passion],
        },
      ],
    });
    if (!activity) {
      return res.status(404).send("Activity does not exist");
    }
    res.send(activity);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
