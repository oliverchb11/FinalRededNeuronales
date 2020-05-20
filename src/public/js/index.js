//requiere la libreria mind
// const s = require("node-mind");

const inicio = (document.getElementById("renderizado-datos").innerHTML = ``);

// Function OnClick
function getApiSearch() {
  //Obtengo el value del search input
  const valuesInput = document.getElementById("search-input").value;

  // URL de la API
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${valuesInput}`;

  // Method
  const miInit = { method: "GET" };

  // Realizo el Fetch para obtener datos
  fetch(apiUrl, miInit)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      // Obtengo data un array de las peliculas mas cercanas que encontro; filtro el primer array [0]
      let filtradoSearch = data.results[0];
      //console.log(filtradoSearch);

      // Valido si me viene undefinend si la pelicula no se encontro
      if (filtradoSearch === undefined) {
        document.getElementById(
          "renderizado-datos"
        ).innerHTML = `La pelicula no se encontro`;

        // Si encontro la pelicula renderizo datos
      } else {
        // destructuring
        var {
          id,
          poster_path,
          title,
          overview,
          vote_average,
          vote_count,
          release_date,
        } = filtradoSearch;

        document.getElementById("renderizado-datos").innerHTML = `
           
            <div class="resultado-api">
      
                <div class="imagen-portada"><img src="https://image.tmdb.org/t/p/w500${poster_path}" />
                <button class="btn btn-primary form-control">Pelicula</button>
                </div>
                <div class="datos-api"><h2 name"title">${title}</h2>
                <div class="datos-api2"><h1>${overview}</h1>
                      <span>
                      <button class="btn btn-primary fas fa-star" id="muestra" onClick="muestra();" ><a>Calificar</a></button>
                      <br>
                      <div id="contenido">
                      <br>
                      <div id="estrella"></div>
                      Año: ${release_date}<br />
                     Estrellas: ${vote_average}<br />
                      
                      Votos: ${vote_count}<br />
                     
                      </div>
                      </span>
                </div>
                </div>
            </div>
            
            `;
      }

      document.getElementById("contenido").style.display = "none";

      // function para crear estrellas
      function starRanking() {
        // redondear el numero que me llega

        var star = Math.round(`${filtradoSearch.vote_average}`);
        for (x = 1; x <= star; x++) {
          var y = [];
          y = [x];

          docFrag = document.createDocumentFragment();
          var i = 1;

          y.forEach(function (i) {
            var delButton = document.createElement("figure");
            docFrag.appendChild(delButton);
            delButton.innerHTML = `
            <form action="/api/peliculas" method="POST">
            <input type="text" value="${i}"  id="valor"  name="calificacion" />
            <input  type='text' value="${title}" id="titulo"  name= "title" />
            <input  type='text' value="${id}" id="titulo2"  name= "idpelicula" />
            <input  type='text' value="${overview}" id="sinopsis"  name= "sinopsis" />
            <input type="text" value="https://image.tmdb.org/t/p/w500${poster_path}" id='img' class="card-img-top" name="imgUrl"/>
            <button class="btn btn-primary fas fa-star" onClick="v();" id="btnstart" title="${i}"></button>
         
            </form> 
      
            `;
            var estre = "";
            delButton.onclick = function () {
              fetch("http://localhost:4000/api/pelis")
                .then((res) => res.json())
                .then((data) => {
                  var acomulado = 0;
                  last = function (data, n) {
                    if (n == null) return data[data.length - 1];
                  };
                  var id = last([data]);
                  idultimo = id.length;
                  console.log(idultimo);

                  for (let x = 0; x < data.length; x++) {
                    acomulado += data[x].calificacion / idultimo;
                    var todo = acomulado.toFixed(1);
                    var entero = Math.round(todo);
                    console.log("acomulado de votacion", entero);

                    estre = `<input type="text" value="${entero}" name='prediccion' ></input>`;
                  }
                });
              document.getElementById("predic").innerHTML = estre;
            };
          });

          var div = document.getElementById("estrella");
          div.appendChild(docFrag);
        }
      }

      starRanking();

      // prueba de otro fetch
      console.log(`id ${filtradoSearch.id}`);
    })
    .catch((error) => console.error("error de datos", error));

  // aca es donde se predice
}

document.getElementById("pe").style.display = "none";
document.getElementById("se").style.display = "none";
document.getElementById("prediciendo").style.display = "none";
