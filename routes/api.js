const express = require('express');
const axios = require('axios');
const User = require('../models/User');
const router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'Não autenticado.' });
}

router.get('/history', ensureAuthenticated, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({ history: user.searchHistory });
});


router.post('/search', ensureAuthenticated, async (req, res) => {
  const { termo } = req.body;
  try {
    // Chamada à OpenWeatherMap
    const weatherResp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(termo)}&appid=${process.env.API_KEY_OPENWEATHERMAP}&lang=pt&units=metric`
    );
    const weather = weatherResp.data;

    // Chamada à Wikipedia
    const wikiResp = await axios.get(
      `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`
    );
    const summary = wikiResp.data;

    // Guarda no histórico do user
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          term: termo,
          results: { weather, summary }
        }
      }
    });

    // Responde com os dados
    res.json({ weather, summary });
  } catch (err) {
    // **MOSTRA O ERRO NO TERMINAL**
    console.error('ERRO AO CHAMAR APIS:', err.response?.data || err.message);
    res.status(400).json({ error: 'Erro nas APIs externas ou termo inválido.' });
  }
});

module.exports = router;