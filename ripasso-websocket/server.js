var fs = require('fs')

const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

const ws_server = new Server({ server });

let clienti=0;
let frutta = ['arance','mandarini','mele','pere','banane'];
let qta = [0,0,0,0,0];
let storico = [];

ws_server.on('connection', (ws) => { 
   
   clienti++;
   ws.id=clienti;

   console.log("nuovo:"+ws.id);
   
   position = {
      frutta: frutta,
      qta: qta,
      ti: -1
   }
   data = JSON.stringify({'position': position});
   ws.send(data);
       
   ws.on('close', () => {
      console.log("esce:"+ws.id);
   });	   
   
   ws.on('message', (message) => {   
       
      const arriva = JSON.parse(message);
      cosa=parseInt(arriva.manda.cosa);
      quanti=parseInt(arriva.manda.quanti);
      str = quanti + "kg di " + frutta[cosa];
      storico.push(str);
      console.log("storico:" + storico);

      console.log("chi:"+ws.id+" cosa:"+cosa+" quanti:"+quanti);
      
      qta[cosa]=qta[cosa]+quanti;

      let position = {
         qu: qta[cosa],
         ti: cosa,
         st: str
      }
      const data = JSON.stringify({'position': position});
      ws_server.clients.forEach((client) => {
         client.send(data);
      });
   });
});
