const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/pelis"; //url de la base de datos
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("base de datos conectada"))
  .catch((err) => console.log("error a conectar la base de datos", err)); // se conecta a la direccion donde esta la base de datos en mongo db
module.exports = mongoose;
