const mongoose = require("mongoose");
const { Schema } = mongoose;

const PeliculaShema = new Schema({
  idpelicula: Number,
  nombre_usuario: String,
  title: String,
  calificacion: Number,
  prediccion: Number,
  sinopsis: String,
  imgUrl: String,
});
module.exports = mongoose.model("Pelicula", PeliculaShema);
