// schedule tasks to be run on the server

const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { mongoose } = require("./database");
const bodyParser = require("body-parser");
//importanto rutas
const router = require("./src/router/ruta");
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
//views
app.set("views", path.join(__dirname, "src/views"));
//routers
app.use("/", router);
//static files
app.use(express.static(path.join(__dirname, "src/public")));
//servidor
app.listen(app.get("port"), () => {
  console.log("Server en el puerto", app.get("port"));
});
