const express = require("express");
const router = express.Router();
const PeliculaController = require("../controller/pelicula-controller");
//ruta inicial y //ruta de peliculas // ruta de series renderizadas
router.get("/", PeliculaController.getPeliculasInicio);
router.get("/inicio", PeliculaController.getPeliculasP);
router.get("/peliculas", PeliculaController.getPeliculasPelis);
router.get("/series", PeliculaController.getSeriesR);
router.get("/comentarios", PeliculaController.getComentarios);
router.get("/favoritos", PeliculaController.getFavoritos);
//methodo get para ver api
router.get("/api/series", PeliculaController.getSeries);
router.get("/api/pelis", PeliculaController.getPeliculas);
router.get("/api/pelis2", PeliculaController.getPelis);
router.get("/api/favoritosp", PeliculaController.getFavoritosp);
router.get("/api/favoritoss", PeliculaController.getFavoritoss);
//metodos post
router.post("/api/series", PeliculaController.CrearSerie);
router.post("/api/peliculas", PeliculaController.CrearPelicula);
router.post("/api/pelis", PeliculaController.CrearPelis);
router.post("/api/seriesC", PeliculaController.CrearPelisC);
router.post("/api/favoritos", PeliculaController.CrearFavoritos);
router.post("/api/favoritosSerie", PeliculaController.CrearFavoritosSerie);
//enviar correo electronico a grupo Developers Team Banda por gmail
router.post("/enviar/email", PeliculaController.EnviarCorreo);
router.get("/enviarcorreo", PeliculaController.getCorreo);
//metodos delete para eliminar favoritos de peliculas y series
router.get("/eliminar/serie/:id", PeliculaController.deleteSerie);
router.get("/eliminar/pelicula/:id", PeliculaController.deletePelicula);
module.exports = router;
