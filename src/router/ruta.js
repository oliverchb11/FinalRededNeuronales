const express = require("express");
const router = express.Router();
const PeliculaController = require("../controller/pelicula-controller");
router.get("/", PeliculaController.getPeliculas);
router.post("/", PeliculaController.CrearPelicula);
module.exports = router;
