// schedule tasks to be run on the server

const express = require("express");
const app = express();

const path = require("path");
const router = require("./src/router/ruta");
const { mongoose } = require("./database");
const bodyParser = require("body-parser");
//middlewares
// app.use(morgan("dev"));
app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "html");
//rutas
app.use("/api/peliculas", router);
// app.use("/htmlFiles", express.static(__dirname + "/views"));
app.use("/cssFiles", express.static(__dirname + "/src/public/css"));
app.use("/jsFiles", express.static(__dirname + "/src/public/js"));
app.use("/imgFiles", express.static(__dirname + "/src/public/image"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});
///////////preduccion

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Server en el puerto", app.get("port"));
});
