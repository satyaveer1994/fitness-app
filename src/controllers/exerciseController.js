const exericswModel = require("../models/exerciseModel");

const createExercise = async (req, res) => {
  const { exerciseName, exerciseLength } = req.body;

  // Validate input
  if (!exerciseName || !exerciseLength) {
    return res
      .status(400)
      .send({ status: false, msg: "Missing required fields" });
  }

  // Create new package
  try {
    const exercise = await exericswModel.create({
      exerciseName,
      exerciseLength,
    });
    res.status(201).json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await exericswModel.findByIdAndDelete(id);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createExercise, deleteExercise };
