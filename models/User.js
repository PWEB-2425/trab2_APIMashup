const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  searchHistory: [
    {
      term: String,
      date: { type: Date, default: Date.now },
      results: mongoose.Schema.Types.Mixed
    }
  ]
});

// ESTA É A LINHA CERTA, resolve o teu erro!
module.exports = mongoose.models.User || mongoose.model('User', userSchema);

