var express = require('express');
var parser = require('body-parser');
var path = require('path');
var app = express();
var ejs = require('ejs');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'app_views'))
app.get('/',function(req,res){
    res.render('home',{
        topicHead : 'Hello From EJS Template'
    });
    console.log('user accessing Home page');
});
app.listen(5000,function(){
    console.log('server running on port 5000');
})
