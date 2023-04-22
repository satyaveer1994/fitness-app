const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  exerciseName: {
    type: String,
    required: true
  },
  exerciseLength: {
    type: Number,
    required: true,
    min:1
  }
});

module.exports = mongoose.model('Exercise', exerciseSchema);