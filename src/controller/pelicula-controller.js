const Pelicula = require("../models/peliculas-db");
const Pelis = require("../models/pelis");
const Serie = require("../models/series");
const SerieC = require("../models/seriesC");
//modulo para enviar correo electronico
const nodemailer = require("nodemailer");
const PeliculaController = {};

//controlador para mostrar la api de peliculas
PeliculaController.getPeliculas = async (req, res) => {
  const Peliculas = await Pelicula.find();
  res.json(Peliculas);
};
//controlador para mostrar la api de series
PeliculaController.getSeries = async (req, res) => {
  const Series = await Serie.find();
  res.json(Series);
};
//controlador para mostrar la api de peliculas con video
PeliculaController.getPelis = async (req, res) => {
  const pelis = await Pelis.find();
  res.json(pelis);
};
//controlador para mostrar la renderizacion de la api de paliculas y series con video
PeliculaController.getPeliculasP = async (req, res) => {
  const pelis = await Pelis.find();
  const series = await SerieC.find();
  res.render("index", {
    pelis,
    series,
  });
};
//controlador para mostrar la  pagina de peliculas y renderizando sus datos
PeliculaController.getPeliculasPelis = async (req, res) => {
  const Peliculas = await Pelicula.find();
  res.render("partials/peliculas", {
    Peliculas,
  });
};
//controlador para mostrar la  pagina de series y renderizando sus datos
PeliculaController.getSeriesR = async (req, res) => {
  const serie = await Serie.find();
  res.render("partials/series", {
    serie,
  });
};
//controlador para mostrar la  pagina de comentarios
PeliculaController.getComentarios = async (req, res) => {
  res.render("partials/comentarios");
};
//controlador para gardar en mongo la pelicula que califico
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
//controlador para gardar en mongo la serie que califico
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
//controlador para gardar en mongo la pelicula con sus videos y mostrarla en el inicio
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
//controlador para gardar en mongo la pelicula con sus videos y mostrarla en el inicio
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
//contralador para enviar correo electronico
PeliculaController.EnviarCorreo = async (req, res) => {
  const { nombre, tipo, genero, comentarios } = req.body;
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: false,
    auth: {
      user: "developersteambanda@gmail.com",
      pass: "1037641216reus11",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  var mailOptions = {
    form: "Developers Team <developersteambanda@gmail.com>",
    to: req.body.email,
    subject: req.body.name,
    text: req.body.comentarios,
    html: `
    <h1>Enviado</h1>
    <h1>Pelicula a actualizar</h1>
    <ul>
    <li>Nombre Pelicula: ${nombre}</li>    
    <li>Tipo :${tipo}</li>   
    <li>Genero: ${genero}</li>
    <h1>Comentarios del usuario</h1>   
    <li>${comentarios}</li>    
    </ul>
    `,
  };

  transporter.sendMail(mailOptions, (error, res) => {
    if (error) {
      console.log(error);
    } else {
    }
  });

  res.redirect("/comentarios");
};

module.exports = PeliculaController;
