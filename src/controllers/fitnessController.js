const exericswModel = require("../models/exerciseModel");
const fitnessModel = require("../models/fitnessModel");

const createFitnessProgram = async (req, res) => {
    try{
  const { programName, exercises } = req.body;

  // Validate input
  if (!programName || !exercises) {
    return res
      .status(400)
      .send({ status: false, msg: "Missing required fields" });
  }

  // Create new package
  
    const fitnessProgram = await fitnessModel.create({
      programName,
      exercises,
      
    });

    console.log(fitnessProgram);
    res.status(201).json(fitnessProgram);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

const getFitnessProgramById = async (req, res) => {
  try {
    const { id } = req.params;
    const fitnessProgram = await fitnessModel.findById(id).populate("exercises").select({__v:0});
    if (!fitnessProgram) {
      return res.status(404).json({ message: "Fitness Program not found" });
    }
    res.json(fitnessProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateFitnessProgramById = async (req, res) => {
  try {
    const { id } = req.params;
    const { programName, exercises } = req.body;

    if (!programName) {
      return res.status(400).json({ message: "Name is required" });
    }

    const fitnessProgram = await fitnessModel.findByIdAndUpdate(
      id,
      { programName, exercises },
      { new: true }
    );
    if (!fitnessProgram) {
      return res.status(404).json({ message: "Fitness Program not found" });
    }

    res.json(fitnessProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const deleteFitnessProgramById = async (req, res) => {
  try {
    const { id } = req.params;
    const fitnessProgram = await fitnessModel.findByIdAndDelete(id);
    if (!fitnessProgram) {
      return res.status(404).json({ message: "fitnessProgram not found" });
    }
    res.json({ message: "fitnessProgram deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createFitnessProgram,
  getFitnessProgramById,
  updateFitnessProgramById,
  deleteFitnessProgramById,
};
