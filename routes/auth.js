const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash });
    await user.save();
    res.json({ message: 'Utilizador registado com sucesso!' });
  } catch (err) {
    res.status(400).json({ error: 'Utilizador já existe.' });
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login efetuado!', user: req.user.username });
});

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.json({ message: 'Logout feito.' });
  });
});

// NOVO: Confirma se está autenticado
router.get('/check', (req, res) => {
  if (req.isAuthenticated()) res.json({ authenticated: true, user: req.user.username });
  else res.json({ authenticated: false });
});

module.exports = router;

