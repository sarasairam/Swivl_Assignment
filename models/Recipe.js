const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  // Add other recipe-related fields as needed
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
