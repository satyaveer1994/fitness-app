const express = require("express");
const router = express.Router();

const exerciseController = require("../controllers/exerciseController");
const fitnessController = require("../controllers/fitnessController");

// Fitness Program Routes
router.post("/fitness-programs", fitnessController.createFitnessProgram);
router.get("/fitness-programs/:id", fitnessController.getFitnessProgramById);
router.put("/fitness-programs/:id", fitnessController.updateFitnessProgramById);
router.delete(
  "/fitness-programs/:id",
  fitnessController.deleteFitnessProgramById
);

// Exercise Routes
router.post("/exercises", exerciseController.createExercise);
router.delete("/exercises/:id", exerciseController.deleteExercise);

module.exports = router;
