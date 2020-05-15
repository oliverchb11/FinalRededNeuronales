const Pelicula = require("../models/peliculas-db");
const Pelis = require("../models/pelis");
const Serie = require("../models/series");
const SerieC = require("../models/seriesC");
const PeliculaController = {};
PeliculaController.getPeliculas = async (req, res) => {
  const Peliculas = await Pelicula.find();
  res.json(Peliculas);
};
PeliculaController.getSeries = async (req, res) => {
  const Series = await Serie.find();
  res.json(Series);
};
PeliculaController.getPelis = async (req, res) => {
  const pelis = await Pelis.find();
  res.json(pelis);
};
PeliculaController.getPeliculasP = async (req, res) => {
  const pelis = await Pelis.find();
  const series = await SerieC.find();
  res.render("index", {
    pelis,
    series,
  });
};
PeliculaController.getPeliculasPelis = async (req, res) => {
  const Peliculas = await Pelicula.find();
  res.render("partials/peliculas", {
    Peliculas,
  });
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
PeliculaController.CrearPelis = async (req, res) => {
  console.log(req.body);
  console.log("entro");

  const peliculas = new Pelis(req.body);
  await peliculas
    .save()
    .then((item) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).send("No Guardo en mogo db");
    });
};

PeliculaController.CrearSerie = async (req, res) => {
  console.log(req.body);
  console.log("entro");

  const series = new Serie(req.body);
  await series
    .save()
    .then((item) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).send("No Guardo en mogo db");
    });
};

PeliculaController.CrearPelisC = async (req, res) => {
  console.log(req.body);
  console.log("entro");

  const series = new SerieC(req.body);
  await series
    .save()
    .then((item) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).send("No Guardo en mogo db");
    });
};

module.exports = PeliculaController;
