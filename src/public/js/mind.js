// const brain = require("brain.js");
// const network = new brain.recurrent.LSTMTimeStep();
const Mind = require("node-mind");

function prededecri() {
  fetch("http://localhost:4000/api/pelis")
    .then((res) => res.json())
    .then((data) => {
      var dato = [1];
      var datoo = [1];
      const mind = new Mind().learn([{ input: dato, output: datoo }]);
      const result = mind.predict([data]);
      console.log(`${result}`);
    });
  prededecri();
}

function datos() {
  fetch("http://localhost:4000/api/pelis")
    .then((res) => res.json())
    .then((data) => {
      var acomulado = 0;

      for (let x = 0; x < data.length; x++) {
        ///////////////ultimo id//////////////////
        last = function (data, n) {
          if (n == null) return data[data.length - 1];
        };
        var id = last([data]);
        idultimo = id.length;
        console.log("ultimo id ", idultimo);
        ////////////////ultimo id ////////////////
        ////////////////acomulado de las votaciones///
        acomulado += data[x].calificacion;
        console.log("acomulado", acomulado);
        var acon = acomulado / idultimo;
        var todo = acon.toFixed(1);
        var entero = Math.round(todo);
        var texto = "";

        for (var n = 0; n < entero; n++) {
          texto += ` <button class="btn btn-primary fas fa-star" title='${n}' id='btn' active></button>`;
        }

        document.getElementById("pred").innerHTML = texto;
        document.getElementById("pred").style.display = "none";
        ////////////////acomulado de las votaciones///
        t = [];
        t = [idultimo, entero];
        console.log("valor t", t);
      }
      document.getElementById("prediciendo").style.display = "block";
      datosSerie();
      var progreso = 0;
      var idIterval = setInterval(function () {
        // Aumento en 10 el progeso
        progreso += 10;
        $("#bar").css("width", progreso + "%");

        //Si llegó a 100 elimino el interval
        if (progreso == 100) {
          clearInterval(idIterval);
          document.getElementById("pe").style.display = "block";
          document.getElementById("se").style.display = "block";
          document.getElementById("pred").style.display = "block";
          document.getElementById("pred2").style.display = "block";
          document.getElementById("progreso").style.display = "none";
          document.getElementById("prediciendo").style.display = "none";
        }
      }, 350);
    });
}
function datosSerie() {
  fetch("http://localhost:4000/api/series")
    .then((res) => res.json())
    .then((data) => {
      var acomulado = 0;

      for (let x = 0; x < data.length; x++) {
        ///////////////ultimo id//////////////////
        last = function (data, n) {
          if (n == null) return data[data.length - 1];
        };
        var id = last([data]);
        idultimo = id.length;
        console.log("ultimo id ", idultimo);
        ////////////////ultimo id ////////////////
        ////////////////acomulado de las votaciones///
        acomulado += data[x].calificacion;
        console.log("acomulado", acomulado);
        var acon = acomulado / idultimo;
        var todo = acon.toFixed(1);
        var entero = Math.round(todo);
        var texto = "";

        for (var n = 0; n < entero; n++) {
          texto += ` <button class="btn btn-danger fas fa-star" title='${n}' id='btn' active></button>`;
        }

        document.getElementById("pred2").innerHTML = texto;
        document.getElementById("pred2").style.display = "none";
        ////////////////acomulado de las votaciones///
        t = [];
        t = [idultimo, entero];
        console.log(t);
      }
    });
}

// funcion para esconder nombre de la peliculas y series que se va a predecir para activarlo despues
// ///con el boton datos
