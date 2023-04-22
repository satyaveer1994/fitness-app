const mongoose = require('mongoose');

const fitnessProgramSchema = new mongoose.Schema({
  
  programName: {
    type: String,
    required: true
  },
  exercises:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

module.exports = mongoose.model('FitnessProgram', fitnessProgramSchema);