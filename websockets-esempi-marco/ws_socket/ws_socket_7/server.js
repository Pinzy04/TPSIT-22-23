const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

let tc = 0;
let quale = 0;
let cquale = 0;
clients=[];
colori=['black','green','blue','red'];

/*
let tabella = new Array();
for(j=0;j<10;j++)
{
   tabella[j] = new Array();
   for(i=0;i<10;i++)
   {
      tabella[j][i]=0;
   }
} 
*/

const ws_server = new Server({ server });

ws_server.on('connection', (ws) => { 
   console.log('New client connected!');
   
   quale++;
   ws.id=quale;
    
   ws.on('close', () => console.log('Client has disconnected!'));
   
   ws.on('message', function(message) {   
       
      const arriva = JSON.parse(message);
      i=arriva.manda.pos;
      si=arriva.manda.cosa;

      console.log(tc+" "+ws.id+" "+i+" "+si);

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



