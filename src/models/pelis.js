const mongoose = require("mongoose");
const { Schema } = mongoose;

const PelisShema = new Schema({
  titulo: String,
  urlvideo: String,
  plataforma: String,
});

module.exports = mongoose.model("Pelis", PelisShema);
