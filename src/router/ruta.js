const express = require("express");
const router = express.Router();
const PeliculaController = require("../controller/pelicula-controller");

router.get("/", PeliculaController.getPeliculasP);
router.get("/peliculas", PeliculaController.getPeliculasPelis);
router.get("/api/pelis", PeliculaController.getPeliculas);
router.post("/api/peliculas", PeliculaController.CrearPelicula);
module.exports = router;
