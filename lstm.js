const brain = require("brain.js");
const network = new brain.recurrent.LSTMTimeStep();
var valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var votaciones =
  (7 + 5 + 2 + 4 + 5 + 6 + 7 + 9 + 1 + 2 + 3 + 5 + 4 + 5 + 1 + 1 + 1) / 17;
var vottotal = votaciones.toFixed(0);
console.log("acomulados", vottotal);
for (x = 0; x < valores.length; x++) {
  // console.log("id", x);
  network.train([[x, vottotal]]);
  var results = network.run([x]);
  var deciaml = results.toFixed(0);
  t = [];
  t = [x, deciaml];
  console.log("todo", t);
}
