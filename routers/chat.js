const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Text = require("../models").text;

const router = new Router();

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const text = await Text.findAll({ where: { activityId: parseInt(id) } });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { activityId, text } = req.body;
    const userId = req.user.id;
    const newText = await Text.create({ userId, activityId, text });
    res.send(newText);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
