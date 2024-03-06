const express = require('express');
const User = require('../classes/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User(username, password);
  await user.register();
  res.status(201).send('User registered successfully');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = new User(username, password);
  const token = await user.login();
  res.json({ token });
});

module.exports = router;
