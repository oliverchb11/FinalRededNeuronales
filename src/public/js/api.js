function api() {
  let rutaprincipal = "https://api.themoviedb.org/3/discover/";
  let apikey = "&api_key=f6aa14cdd8de77b073ab81ed80e212b5";
  fetch(`${rutaprincipal}movie?sort_by=popularity.desc${apikey}`)
    .then((res) => res.json())
    .then((data) => {
      let datos = data.results;
      for (let i = 0; i < datos.length; i++) {
        var form = "";
        let titulo = datos[i].title;

        form = `
        <form action='/api/pelis' method='post'>
        <input type="text" name="titulo" value='${titulo}'/>
        <input type="submit" value='hola' class="btn btn-primary"/>
        </form>
        `;
      }
      document.getElementById("text2").innerHTML = form;
    })
    .catch((e) => {
      if (e) {
        console.log("error al consumir la api peliculas");
      }
    });
}

api();
