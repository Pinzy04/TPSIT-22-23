var express = require("express");
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/risposta", function(req,res){
    //console.log("Ricevuto una richiesta POST");
    //console.log(req.body);
    console.log(req.body.a);
  
   res.writeHead(200, {"Content-Type": "text/html"});
   res.write('<!DOCTYPE html>'+
   '<html>'+
   ' <head>'+
   ' <meta charset="utf-8" />'+
   ' <title>Pagina Node.js!</title>'+
   ' </head>'+
   ' <body>'+
   '  <p>Doppio: <strong>'+(req.body.a)*2+'</strong>!</p>'+
   '  <a href="/">Torna</a>'+          
   ' </body>'+
   '</html>');
   res.end();
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port);
});
