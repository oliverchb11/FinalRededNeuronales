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
          texto += ` <button class="btn btn-primary fas fa-star" id='btn' active></button>`;
        }

        document.getElementById("pred").innerHTML = texto;
        ////////////////acomulado de las votaciones///
        t = [];
        t = [idultimo, entero];
        console.log(t);
      }
      datosSerie();
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
          texto += ` <button class="btn btn-primary fas fa-star" id='btn' active></button>`;
        }

        document.getElementById("pred2").innerHTML = texto;
        ////////////////acomulado de las votaciones///
        t = [];
        t = [idultimo, entero];
        console.log(t);
      }
    });
}
////
