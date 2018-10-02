const express = require("express");
const { Recipe } = require("../models/recipe");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
