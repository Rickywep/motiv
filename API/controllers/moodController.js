const Mood = require("../models/Mood");

exports.crearMood = async (req, res) => {
  console.log("file: moodController.js ~ line 7 ~ req.body", req.body);
  try {
    // Crear Mood
    const mood = new Mood(req.body);
    const anon = mood.anonimo;

    // Creador mood
    if (!anon) {
      mood.creador = req.usuario.id;
    }

    mood.save();
    res.json(mood);
  } catch (error) {
    console.log("~ error", error);
    res.status(500).send("hubo un error");
  }
};
