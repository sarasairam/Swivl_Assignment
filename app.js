const express = require('express');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const bodyParser = require('body-parser');
const mongoose = require('./db');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
