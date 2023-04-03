const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

clients=[];
let tutto = "";

const ws_server = new Server({ server });

ws_server.on('connection', (ws) => { 
       
   ws.on('close', () => {
      
       for(k=0;k<clients.length;k++){ 
         if(clients[k]===ws.id) { 
            clients.splice(k,1); 
         }
      }      
      console.log("esce:"+ws.id);

      let position = {
         quanti: clients,
         ti: -2
      }
      const data = JSON.stringify({'position': position});
      ws_server.clients.forEach((client) => {
          client.send(data);
      });

   });	   
   
   ws.on('message', (message) => {   
       
      const arriva = JSON.parse(message);
      
      if(arriva.manda.ti==1) {
         quale=arriva.manda.quale;
         tutto = tutto + "<" + ws.id + "> " + quale + "\n";

         console.log("chi:"+ws.id+" quale:"+quale);

         let position = {
            testo: tutto,
            ti: 1
         }
         const data = JSON.stringify({'position': position});
         ws_server.clients.forEach((client) => {
            client.send(data);
         });
      } 
      else
      {
         ws.id=arriva.manda.quale;
         clients.push(ws.id);

         console.log("nuovo:"+ws.id);
         
         let position = {
            chi: ws.id,
            ti: 0
         }
         let data = JSON.stringify({'position': position});
         ws.send(data);

         position = {
            quanti: clients,
            ti: -1
         }
         data = JSON.stringify({'position': position});
         ws_server.clients.forEach((client) => {
            client.send(data);
         });

      }
        
   });
});



