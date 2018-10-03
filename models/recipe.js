const mongoose = require("mongoose");
const Joi = require("joi");

const Recipe = mongoose.model(
  "Recipe",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 255
    },
    email: {
      type: String,
      required: true
    },
    submittedOn: {
      type: Date,
      required: true,
      default: Date.now
    },
    category: {
      type: String,
      enum: ["BREAKFAST", "LUNCH", "SUPPER", "SNACK", "DESSERT"]
    },
    procedure: {
      type: Array,
      required: true
    },
    ingredients: {
      type: Array,
      required: true
    },
    image: {
      type: Buffer,
      contentType: String
    }
  }),
  "Recipe"
);

function validateRecipe(recipe) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    procedure: Joi.array().required(),
    ingredients: Joi.array().required(),
    category: Joi.string()
  };

  return Joi.validate(recipe, schema);
}

exports.Recipe = Recipe;
exports.validate = validateRecipe;
