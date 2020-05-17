const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavoritaSerieShema = new Schema({
  idseriefav: Number,
  imagenserie: String,
  tituloserie: String,
});

module.exports = mongoose.model("FavoritaSerie", FavoritaSerieShema);
