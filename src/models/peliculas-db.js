const mongoose = require("mongoose");
const { Schema } = mongoose;

const PeliculaShema = new Schema({
  idpelicula: Number,
  nombre_usuario: String,
  title: String,
  calificacion: Number,
  prediccion: Number,
});
module.exports = mongoose.model("Pelicula", PeliculaShema);
