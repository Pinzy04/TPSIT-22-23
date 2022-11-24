var express = require('express');
var parser = require('body-parser');
var app = express();
var person =[
    {
        fname : 'Tanmay',
        lname : 'Sarkar'
    },
    {
        fname : 'Harold',
        lname : 'Finch'
    },
    {
        fname : 'John',
        lname : 'Reese'
    }
]
app.get('/',function(req,res){
    res.json(person);
    console.log('user accessing array parsing page');
});
app.listen(5000,function(){
    console.log('server running on port 5000');
})
