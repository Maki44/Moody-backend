const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const {
  accessory,
  cloth,
  eye,
  eyebrow,
  facialHair,
  hairStyle,
  hairColor,
  hatColor,
  mouth,
  skin,
} = require("../models");
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const accessories = await accessory.findAll({ attributes: ["name", "id"] });
    const clothes = await cloth.findAll({ attributes: ["name", "id"] });
    const eyes = await eye.findAll({ attributes: ["name", "id"] });
    const eyebrows = await eyebrow.findAll({ attributes: ["name", "id"] });
    const facialHairs = await facialHair.findAll({
      attributes: ["name", "id"],
    });
    const hairStyles = await hairStyle.findAll({ attributes: ["name", "id"] });
    const hairColors = await hairColor.findAll({ attributes: ["name", "id"] });
    const hatColors = await hatColor.findAll({ attributes: ["name", "id"] });
    const mouthes = await mouth.findAll({ attributes: ["name", "id"] });
    const skins = await skin.findAll({ attributes: ["name", "id"] });
    res.status(200).send({
      accessories,
      clothes,
      eyes,
      eyebrows,
      facialHairs,
      hairStyles,
      hairColors,
      hatColors,
      mouthes,
      skins,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/user", authMiddleware, async (req, res) => {
  try {
    const { avatar } = req.body;
    const userId = req.user.id;
    const user = await User.findByPk(userId);
    await user.update({ ...user, avatar });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
