const Pelicula = require("../models/peliculas-db");
const PeliculaController = {};
PeliculaController.getPeliculas = async (req, res) => {
  const Peliculas = await Pelicula.find();
  res.json(Peliculas);
};
PeliculaController.CrearPelicula = async (req, res) => {
  console.log(req.body);
  console.log("entro");
  const peliculas = new Pelicula(req.body);
  await peliculas
    .save()
    .then((item) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).send("No Guardo en mogo db");
    });
};

module.exports = PeliculaController;
