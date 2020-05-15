function apiSeries() {
  let rutaprincipal = "https://api.themoviedb.org/3/discover/";
  let apikey = "&api_key=f6aa14cdd8de77b073ab81ed80e212b5";
  fetch(`${rutaprincipal}tv?sort_by=popularity.desc${apikey}`)
    .then((res) => res.json())
    .then((data) => {
      let datos = data.results;

      for (let i = 0; i < datos.length; i++) {
        var form = "";
        let titulo = datos[i].name;
        console.log("api de series", titulo);
        form = `
          <form action='/api/seriesC' method='post'>
          <input type="text" name="titulo" value='${titulo}'/>
          <input type="text" name="urlvideo" value='https://www.youtube.com/embed/t-775JyzDTk?start=3'/>
          <input type="text" name="plataforma" value='https://lh3.googleusercontent.com/proxy/uz3pMpBydhsJhRT2J_Wj5GRZoqNHOLQnIDtgw-GL2U7rzdioABPckSFHuVB7-2SXFNBgOwsfBJMDgAKnfQE_7P7mbAEMFZgDJkMyEyQe-S1-'/>
          <input type="submit" value='hola' class="btn btn-primary"/>
          </form>
          `;
      }
      document.getElementById("text3").innerHTML = form;
    })
    .catch((e) => {
      if (e) {
        console.log("error al consumir la api de series");
      }
    });
}

apiSeries();
