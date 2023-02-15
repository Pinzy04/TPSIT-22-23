var express = require("express");
var path = require("path");
var app = express();
var ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

nickname= "Pinzy";
score= 100;

//La pagina home
app.get("/", function(req, res) {
  res.render("home", {
    topicHead: "EJS con interfaccia PRO responsive BS5",
    nickname: nickname, 
    score: score,
    data: new Date()
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});