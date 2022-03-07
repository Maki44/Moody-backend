const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const UserMood = require("../models").userMood;
const Mood = require("../models").mood;
const User = require("../models").user;
const Activity = require("../models").activity;
const UserActivity = require("../models").userActivity;

const router = new Router();

router.post("/:id", async (req, res, next) => {
  const { id } = req.params;
  //const { userId } = req.user;
  const { minAge, maxAge, maxPersons } = req.body;
  const userId = 1;
  try {
    // find the mood and the user
    const mood = await Mood.findByPk(parseInt(id));
    const user = await User.findByPk(userId);
    const { lat, lng } = user;
    if (!mood) {
      return res.status(404).send({ message: "Activity does not exist" });
    }
    // Add mood to the user
    await user.addMood(mood);
    // Create Activity
    const activity = await Activity.create({
      lat,
      lng,
      minAge,
      maxAge,
      maxPersons,
      moodId: id,
    });
    // Add activity to user
    await user.addActivity(activity);
    const activityId = activity.dataValues.id;
    console.log("activity id", activityId);
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

router.post("/join/:id", async (req, res, next) => {
  try {
    // id is sent from client is Activity Id
    const { id } = req.params;
    // Check Activity with the give Id
    const activity = await Activity.findByPk(parseInt(id));
    if (!activity) {
      return res.status(404).send("Activity Not found");
    }
    const { activityId, moodId } = activity.dataValues.id;
    const userId = 2;
    // Get the user From DB;
    const user = await User.findByPk(userId);

    // find the mood
    const mood = await Mood.findByPk(parseInt(id));
    // Add mood to the user
    await user.addMood(mood);
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

router.get("/", async (req, res, next) => {
  try {
    const activities = await UserActivity.findAll({
      include: [User, Activity],
    });
    res.json(activities);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
