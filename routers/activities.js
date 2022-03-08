const { Router } = require("express");
const axios = require("axios");
const authMiddleware = require("../auth/middleware");
const UserMood = require("../models").userMood;
const Mood = require("../models").mood;
const User = require("../models").user;
const Activity = require("../models").activity;
const UserActivity = require("../models").userActivity;

const router = new Router();

router.post("/:id", authMiddleware, async (req, res, next) => {
  // Mood Id passed as parameter
  const { id } = req.params;
  const userId = req.user.id;
  const { minAge, maxAge, maxPersons, description, lat, lng } = req.body;
  console.log("req, body", req.body);
  try {
    // find the mood and the user
    const mood = await Mood.findByPk(parseInt(id));
    const user = await User.findByPk(userId);
    if (!mood) {
      return res.status(404).send({ message: "Activity does not exist" });
    }
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyARCxfkZP2leKqrjHPxbSxbJLazD1EGIJ0`
    );
    const city = response.data.results[7].formatted_address.split(",")[0];
    // Create Activity
    const activity = await Activity.create({
      lat,
      lng,
      city,
      minAge,
      maxAge,
      maxPersons,
      description,
      moodId: id,
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

router.post("/join/:id", async (req, res, next) => {
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

    // Add Activity to user
    await user.addActivity(activity);
    // get UserActivity and send to client
    const userActivity = await UserActivity.findOne({
      where: {
        userId,
        activityId,
      },
      include: [{ model: Activity, include: [Mood] }],
    });
    res.json(userActivity);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const activities = await Activity.findAll({
      include: [User, Mood],
    });
    res.json(activities);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/places/:name/:lat/:lng", async (req, res) => {
  try {
    const { name, lat, lng } = req.params;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=1500&type=${name}&key=AIzaSyARCxfkZP2leKqrjHPxbSxbJLazD1EGIJ0`
    );
    //console.log(JSON.stringify(response.data));
    res.send(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
