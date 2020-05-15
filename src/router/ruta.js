const express = require("express");
const router = express.Router();
const PeliculaController = require("../controller/pelicula-controller");
//ruta inicial y //ruta de peliculas
router.get("/", PeliculaController.getPeliculasP);
router.get("/peliculas", PeliculaController.getPeliculasPelis);
//methodo get para ver api
router.get("/api/series", PeliculaController.getSeries);
router.get("/api/pelis", PeliculaController.getPeliculas);
router.get("/api/pelis2", PeliculaController.getPelis);
//metodos post
router.post("/api/series", PeliculaController.CrearSerie);
router.post("/api/peliculas", PeliculaController.CrearPelicula);
router.post("/api/pelis", PeliculaController.CrearPelis);
router.post("/api/seriesC", PeliculaController.CrearPelisC);
module.exports = router;
