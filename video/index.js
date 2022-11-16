/*
    16 introduzione a Express

    - pulizia progetto
    - npm init
    - installare express, nodemon
    - import express
    - gestire richieste pagine home, about, contatti
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('homepage.html', (req, res) => {root: __dirname + '/public'});
})

app.get('/about',(req, res) => {
    res.sendFile('about.html', (req, res) => {root: __dirname + '/public'});
})

app.get('/contatti',(req, res) => {
    res.sendFile('contatti.html', (req, res) => {root: __dirname + '/public'});
})

app.all('*',(req, res) => {
  res.sendFile('404.html', (req, res) => {root: __dirname + '/public'});
})

app.listen(3000);
