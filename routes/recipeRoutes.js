const express = require('express');
const Recipe = require('../classes/Recipe');
const authMiddleware = require('../middleWare/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  const recipes = await Recipe.getAll();
  res.json(recipes);
});

router.get('/:recipeId', async (req, res) => {
  const recipeId = req.params.recipeId;
  const recipe = await Recipe.getById(recipeId);
  res.json(recipe);
});

router.post('/', async (req, res) => {
  const { title, description, ingredients, instructions } = req.body;
  const recipe = new Recipe(title, description, ingredients, instructions);
  await recipe.create();
  res.status(201).send('Recipe created successfully');
});

router.put('/:recipeId', async (req, res) => {
  const recipeId = req.params.recipeId;
  const { title, description, ingredients, instructions } = req.body;
  const recipe = new Recipe(title, description, ingredients, instructions);
  await recipe.update(recipeId);
  res.send('Recipe updated successfully');
});

router.delete('/:recipeId', async (req, res) => {
  const recipeId = req.params.recipeId;
  await Recipe.delete(recipeId);
  res.send('Recipe deleted successfully');
});

module.exports = router;
