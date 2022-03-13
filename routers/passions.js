const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Passion = require("../models/").passion;
const User = require("../models").user;
const UserPassion = require("../models").userPassion;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const passions = await Passion.findAll();
    res.status(200).send(passions);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.put("/update", authMiddleware, async (req, res, next) => {
  try {
    console.log("req", req.body);
    const { bio, passionIds } = req.body;
    const userId = req.user.id;
    const user = await User.findByPk(userId, {
      include: [{ model: Passion, attributes: ["name", "id"] }],
    });
    await user.update({ ...user, bio });
    const userPassions = await UserPassion.findAll({
      where: { userId },
      raw: true,
    });

    console.log("user pasions", userPassions);
    const ids = userPassions.map((userPassion) => userPassion.passionId);
    // Check if a user remove previouse added passion and remove
    const removedPassions = ids.filter(
      (passionId) => !passionIds.includes(passionId)
    );
    console.log("removed passions", removedPassions);
    const removedPromises = removedPassions.map(async (passion) => {
      const passionByName = await Passion.findOne({
        where: { id: passion },
      });
      return await user.removePassion(passionByName);
    });
    await Promise.all(removedPromises);
    // Add new passions
    const newPassions = passionIds.filter((passion) => !ids.includes(passion));
    console.log("newPassions", newPassions);

    const promises = newPassions.map(async (passion) => {
      const passionByName = await Passion.findOne({
        where: { id: passion },
      });
      return await user.addPassion(passionByName);
    });
    await Promise.all(promises);
    await user.reload();
    delete user.dataValues["password"];
    res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
