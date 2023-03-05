let express = require('express');
let path = require('path');
let fs = require('fs')
let bodyParser = require('body-parser')
let data = require('./data/data.json');
let app = express();
let myLibrary = require('./myutils.js')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app_views'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.render('pages/index', {
    titoloJSON: "Home",
    currentPage: "Home"
  });
});

app.get('/social', function(req, res) {

  data = myLibrary.readFile('./data/data.json')

  res.render('pages/social', {
    data: data,
    titoloJSON: "Social",
    currentPage: "Social"
  });
});

app.post('/scrivi', function(req, res) {

  let dataJSON = JSON.parse(fs.readFileSync('./data/data.json', 'utf8', function(err) {
    if (err) {
      console.log(err)
    }
  }))

  let person = {
    name: req.body.name,
    nickname: req.body.nickname,
    score: req.body.score
  }

  myLibrary.addElementToJSON(dataJSON, person);
  myLibrary.writeFileJSON('./data/data.json', dataJSON);
  res.redirect('/social');
});

app.listen(8080, function (res,req) {
  console.log('listening on port 8080');
});