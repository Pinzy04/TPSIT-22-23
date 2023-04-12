const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

const ws_server = new Server({ server });


function conta(posiz) {

   cosa="";
   cv=0;
   cb=0;
   cr=0;
   
   for(k=0;k<9;k++) {
      if(posiz[k]==1) cv++;
      if(posiz[k]==2) cb++;
      if(posiz[k]==3) cr++;
   }
   if(cv>=5) cosa="verde";
   if(cb>=5) cosa="blu";
   if(cr>=5) cosa="rosso";

   return(cosa);
}


let tc = 0;
let quale = 0;
clients=[];
colori=['black','green','blue','red'];

posiz=[];
for(k=0;k<9;k++) {
   posiz[k]=0;    
}

ws_server.on('connection', (ws) => { 
   console.log('New client connected!');
   
   quale++;
   ws.id=quale;
    
   ws.on('close', () => console.log('Client has disconnected!'));
   
   ws.on('message', function(message) {   
       
      const arriva = JSON.parse(message);
      i=arriva.manda.pos;

      posiz[i]=ws.id;
      quanti=conta(posiz);
          
      console.log(tc+" "+ws.id+" "+i+" "+quanti);
      
      let position = {
         ti: i,
         colore: colori[ws.id],
         chi: ws.id,
         cosa: quanti
      }
      const data = JSON.stringify({'position': position});
      ws_server.clients.forEach((client) => {
         client.send(data);
      });
   });
});