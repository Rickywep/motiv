const Mood = require("../models/Mood");
const Usuario = require("../models/Usuario");

exports.crearMood = async (req, res) => {
  try {
    // Crear Mood
    const mood = new Mood(req.body);
    const anon = mood.anonimo;

    // Creador mood
    if (!anon) {
      mood.creador = req.usuario.id;
    }

    const usuario = await Usuario.findById(req.usuario.id);
    const date = new Date().toISOString().split("T")[0];

    usuario.lastDateMood = date;
    await usuario.save();

    mood.save();
    res.json(mood);
  } catch (error) {
    console.log("~ error", error);
    res.status(500).send("hubo un error");
  }
};

exports.canAddMood = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id);
    const date = new Date().toISOString().split("T")[0];

    if (usuario.lastDateMood === date) {
      return res.json(false);
    }
    return res.json(true);
  } catch (error) {
    console.log("~ error", error);
    res.status(500).send("hubo un error");
  }
};

exports.obtenerMoods = async (req, res) => {
  try {
    const moods = await Mood.find();
    res.json({ moods });
  } catch (error) {
    console.log("~ error", error);
    res.status(500).send("hubo un error");
  }
};
