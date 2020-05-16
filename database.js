//requerimos el driver de mongoose para conectarnos a mongo db
const mongoose = require("mongoose");
//colocamos la url de la base de datos de mongo esta lo podemos ver si en la consola de comando colocamos
//mongod desdes el cmd, despues del puerto colocamos el nombre de como se va a llamar la base de datos
//en este caso el nombre de la base de datos es /pelis
const URI = "mongodb://localhost:27017/pelis"; //url de la base de datos
//luego hacemos la conexion de la base datos con el comando mongoose.connect segudio la url de la base de datos
// y validamos con promesas si la base de datos conecto con then y si no conecto con catch y mostramos el mensaje
//por consola
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`
  *****************************
  ***base de datos conectada***
  *****************************
  `)
  )
  .catch((err) => console.log("error a conectar la base de datos", err)); // se conecta a la direccion donde esta la base de datos en mongo db
module.exports = mongoose;
