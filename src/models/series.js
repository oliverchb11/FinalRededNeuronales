const mongoose = require("mongoose");
const { Schema } = mongoose;

const SerieShema = new Schema({
  idserie: Number,
  nombre_usuario: String,
  name: String,
  calificacion: Number,
  prediccion: Number,
  sinopsis: String,
  imgUrl: String,
});

module.exports = mongoose.model("Serie", SerieShema);
