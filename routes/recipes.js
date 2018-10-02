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

router.get("/search", async (req, res) => {
  const recipe = await Recipe.find({ name: req.query.name });
  res.send(recipe);
});

router.get("/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.send(recipe);
});

module.exports = router;
