const express = require('express');
const fs = require('fs')

const server = express()
   .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
   .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

let tc = 0;
let client_id = 0;
let cquale = 0;
clients=[];
colori=['black','green','blue','red','yellow'];

const ws_server = new Server({ server });

ws_server.on('connection', (ws) => { 
   console.log('New client connected!');

   if (client_id >= 4) {
      ws.close();
   }
      
   client_id++;
   ws.id=client_id;
   
   ws.on('close', () => {
   console.log('Client has disconnected!');
   client_id--;
});

ws.on('message', function(message) {   
   const arriva = JSON.parse(message);
   i=arriva.manda.pos;
   si=arriva.manda.cosa;

   console.log(tc+" "+ws.id+" "+i+" "+si);

   const storico = "Number " + (i+1) + " color " + colori[ws.id]  + "\n";
      fs.appendFile('storico.txt', storico, (err) => {
         if (err) throw err;
      })

      let position = {
         ti: i,
         colore: colori[ws.id],
         chi: ws.id
      }
      const data = JSON.stringify({'position': position});
      ws_server.clients.forEach((client) => {
         client.send(data);
      });
   });
});