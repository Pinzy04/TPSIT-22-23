const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

const ws_server = new Server({ server });

//funzione per far spostare la posizione
function sposta(pos,dove) {
    if (dove == 'sx') {
        if((pos-1) == (-1)) {
            pos=6;
        } else {
            pos=pos-1;
        }
        console.log(pos);
    } 
    if (dove == 'dx') {
        if((pos+1) == 7) {
            pos=0;
        } else {
            pos=pos+1;
        }
        console.log(pos);
    }
}

var quale = 0;
clients=[];
//var pos = 0;
var ultimo = 0;


//connessione di un client
ws_server.on('connection', (ws) => { 
    console.log('New client connected!');
    
    quale++;
    ws.id=quale;
        
    ws.on('close', () => console.log('Client has disconnected!'));
    
    /*
    //manda al client le informazioni correnti
    let position = {
        pos: pos,
        last: ultimo
    }
    
    const data = JSON.stringify({'position': position});
    ws_server.clients.forEach((client) => {
        client.send(data);
    });
    */

    ws.on('message', function(message) {   //riceve dal client
        
        const arriva = JSON.parse(message);
        pos=parseInt(arriva.manda.pos);
        dove=arriva.manda.dove;

        ultimo=ws.id;
        sposta(pos,dove);
            
        console.log("chi:"+ws.id+" dove:"+dove+" new pos:"+pos);
        
        let position = {
            pos: pos,
            last: ultimo
        }
        const data = JSON.stringify({'position': position});
        ws_server.clients.forEach((client) => {
            client.send(data);
        });
    });
});
