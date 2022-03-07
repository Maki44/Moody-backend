const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Mood = require("../models/").mood;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const moods = await Mood.findAll();
    res.status(200).send(moods);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
