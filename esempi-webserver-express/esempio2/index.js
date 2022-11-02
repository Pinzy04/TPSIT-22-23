var express = require("express");
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/risposta", function(req,res){
   console.log(req.body.a);
  
   res.writeHead(200, {"Content-Type": "text/html"});
   res.write('<!DOCTYPE html>'+
   '<HTML><BODY>'+
   '<FORM method="post" ACTION="/risposta">'+
   'valore:<INPUT type="text" size="3" name="a" value="'+req.body.a+'">'+
   '<INPUT type="submit" name="b"><BR>'+
   'doppio:<INPUT type="text" size="3" name="d" value="'+(req.body.a*2)+'" readonly>'+
   '</FORM>'+
   '</BODY></HTML>');
   res.end();
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port);
});
