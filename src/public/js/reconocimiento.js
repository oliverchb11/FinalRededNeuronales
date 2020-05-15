function buscarVoz() {
  let rec;
  if (!("webkitSpeechRecognition" in window)) {
    alert("disculpas, no puedes usar la API");
  } else {
    rec = new webkitSpeechRecognition();
    rec.lang = "es-COL";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result", iniciar);
  }
  function iniciar(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      var evento = event.results[i][0].transcript;
      document.getElementById("texto").innerHTML = evento;
      var input = "";
      input = `    <input
    id="search-input"
    type="text"
    value="${evento}"
    name="title"
    placeholder="Inserte la pelicula que buscara"
  />`;
      document.getElementById("input").innerHTML = input;
    }
  }

  rec.start();
}
