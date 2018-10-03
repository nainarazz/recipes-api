const express = require("express");
const { Recipe, validate } = require("../models/recipe");

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

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let recipe = new Recipe({
    name: req.body.name,
    email: req.body.email,
    submittedOn: Date.now(),
    category: req.body.category,
    procedure: req.body.procedure,
    ingredients: req.body.ingredients
  });

  try {
    recipe = await recipe.save();
    return res.send(recipe);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
