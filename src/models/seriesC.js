const mongoose = require("mongoose");
const { Schema } = mongoose;

const SeriesCShema = new Schema({
  titulo: String,
  urlvideo: String,
  plataforma: String,
});

module.exports = mongoose.model("SeriesC", SeriesCShema);
