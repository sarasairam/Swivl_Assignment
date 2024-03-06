const RecipeModel = require('../models/Recipe');

class Recipe {
  constructor(title, description, ingredients, instructions) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  async create() {
    const newRecipe = new RecipeModel({
      title: this.title,
      description: this.description,
      ingredients: this.ingredients,
      instructions: this.instructions,
    });
    await newRecipe.save();
  }

  static async getAll() {
    return await RecipeModel.find();
  }

  static async getById(recipeId) {
    return await RecipeModel.findById(recipeId);
  }

  async update(recipeId) {
    await RecipeModel.findByIdAndUpdate(recipeId, {
      title: this.title,
      description: this.description,
      ingredients: this.ingredients,
      instructions: this.instructions,
    });
  }

  static async delete(recipeId) {
    await RecipeModel.findByIdAndDelete(recipeId);
  }
}

module.exports = Recipe;
