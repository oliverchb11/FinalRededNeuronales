const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavoritasPeliculaShema = new Schema({
  idpeliculafav: Number,
  imagenpelicula: String,
  titulopelicula: String,
});

module.exports = mongoose.model("FavoritasPelicula", FavoritasPeliculaShema);
