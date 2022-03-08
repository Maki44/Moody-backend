const bcrypt = require("bcrypt");
const { Router } = require("express");
const axios = require("axios");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const UserActivity = require("../models/").userActivity;
const Activity = require("../models/").activity;
const Mood = require("../models").mood;
const { SALT_ROUNDS } = require("../config/constants");
//require("dotenv").config();
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password, lat, lng } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email }, include: [] });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyARCxfkZP2leKqrjHPxbSxbJLazD1EGIJ0`
    );
    const city = response.data.results[7].formatted_address.split(",")[0];

    await user.update({ ...user, lat, lng, city });
    console.log("user", user);
    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    const userId = user.id;
    const userActivity = await UserActivity.findAll({
      where: {
        userId,
      },
      include: [{ model: Activity, include: [Mood] }],
    });
    return res.status(200).send({ token, ...user.dataValues, userActivity });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name, lat, lng } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }
  //const API_KEY = process.env.API_KEY;
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyARCxfkZP2leKqrjHPxbSxbJLazD1EGIJ0`
  );
  const city = response.data.results[7].formatted_address.split(",")[0];
  console.log("city", city);
  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      lat,
      lng,
      city,
    });
    //console.log("newUser", newUser);
    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }
    console.log("error", error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  const userId = req.user.id;
  const userActivity = await UserActivity.findAll({
    where: {
      userId,
    },
    include: [{ model: Activity, include: [Mood] }],
  });
  res.status(200).send({ ...req.user.dataValues, userActivity });
});

module.exports = router;
