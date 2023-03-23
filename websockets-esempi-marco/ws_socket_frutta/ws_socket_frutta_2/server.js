
function replaceByValue( field1, newvalue, field2, value ) {
    for( var k = 0; k < elenco.length; ++k ) {
        if( value == elenco[k][field2]) {
            elenco[k][field1] = newvalue ;
        }
    }
    return elenco;
}


const express = require('express');
const fs = require('fs');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

const ws_server = new Server({ server });

//------

let clienti=0;
file = './frutta.json';

if (fs.existsSync(file)) {
   elenco=JSON.parse(fs.readFileSync(file));
}

ws_server.on('connection', (ws) => { 
   
   clienti++;
   ws.id=clienti;

   console.log("nuovo:"+ws.id);
   
   position = {
      elenco: elenco,
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

      console.log("chi:"+ws.id+" cosa:"+cosa+" quanti:"+quanti);
      
      elenco[cosa].qta=parseInt(elenco[cosa].qta)+quanti;
      elenco = replaceByValue( 'qta', elenco[cosa].qta, 'tipo', elenco[cosa].tipo );
      json=JSON.stringify(elenco);
      console.log(elenco); 

      fs.writeFile('./frutta.json', json, 'utf8', function (err) {
         if (err) {
	    console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
         }
         console.log("JSON file has been saved.");
      });

      let position = {
         qu: elenco[cosa].qta,
         ti: cosa
      }
      const data = JSON.stringify({'position': position});
      ws_server.clients.forEach((client) => {
         client.send(data);
      });
      
   });
});



