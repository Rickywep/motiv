const express = require("express");
const router = express.Router();
const moodController = require("../controllers/moodController");
const auth = require("../middleware/auth");

//Crear mood
//api/mood
router.post("/", auth, moodController.crearMood);
router.get("/canAddMood", auth, moodController.canAddMood);
router.get(
  "/",
  // auth,
  moodController.obtenerMoods
);

module.exports = router;
