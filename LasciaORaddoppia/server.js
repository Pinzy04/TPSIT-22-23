var express = require("express");
var path = require("path");
var app = express();
var ejs = require("ejs");
const { isSet } = require("util/types");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

var budget = 100;
var puntata = 10;
var testo ='';

app.get("/", function(req, res) {
  testo ='';
  if (budget === 0) {
    testo = testo + "Hai esaurito il budget! Ricarica per continuare a giocare...";
  }
  res.render("home", {
    topicHead: "Lascia o Raddoppia",
    testo: testo,
    budget: budget
  });
});

app.post("/restart", function(req, res) {
  testo ='';
  budget = 100;
  res.render("home", {
    topicHead: "Lascia o Raddoppia",
    testo: testo,
    budget: budget
  });
});

app.post("/score", function(req, res) {
  if(req.body.raddoppia){
    puntata = puntata*2;
  }

  budget -= puntata;
  var moneta = Math.floor(Math.random() * 2);

  if(moneta === 1) {
    var vincita = puntata*2;
    budget += vincita;
    testo = "Congratulazioni, hai vinto €" + vincita + ". Ora il tuo budget è €" + budget + "!<br>Vuoi raddoppiare?";
    continua = true;
  } else {
    puntata = 10;
    continua = false;
    testo = "Mi dispiace, hai perso. Ora il tuo budget è €" + budget + "!";
  }
  
  if (budget === 0) {
    testo = testo + "\nHai esaurito il budget!";
  }

  res.render("score", {
    topicHead: "Lascia o Raddoppia",
    testo: testo,
    budget: budget,
    continua: continua
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});