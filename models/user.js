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


module.exports = mongoose.model('User', userSchema);
