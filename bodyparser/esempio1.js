var express = require('express');
var parser = require('body-parser');
var app = express();
var person ={
    fname : 'Tanmay',
    lname : 'Sarkar',
    address : {
        add1 : 'my home address',
        add2 : 'my office address'
    }
}
app.get('/',function(req,res){
    res.json(person);
    console.log('user accessing json parsing page');
});
app.listen(5000,function(){
    console.log('server running on port 5000');
})
