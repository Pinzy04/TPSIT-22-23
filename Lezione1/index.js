const a = 10;
const miaUtils = require('./utils');

if(a == 10)
  console.log("funziona");

console.log("nome del file di progetto: " + __filename);

console.log("dierctory del progetto: " + __dirname);

miaUtils.saluta("meloni");
miaUtils.scambia("meloni");
miaUtils.succ(23);
miaUtils.dispari(65);
console.log(miaUtils.simpatia(48));
miaUtils.primi(23,59);
miaUtils.persona(8, 'Fabio', 'Pinzy', 'Hello World', '192.168.1.28', '07/11/2004', 'Verde', 'Calibri');
miaUtils.primiFS();
miaUtils.strFile("ciao", 12)