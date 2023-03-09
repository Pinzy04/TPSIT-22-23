const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));
  
const { Server } = require('ws');

const ws_server = new Server({ server });

var x = 0
var y = 0
setInterval(() => {
  ws_server.clients.forEach((client) => {
	  if (y == 0) {
      x=x+2;
    }
    if (x == 950) {
      y=y+2;
    }
    if (y == 450) {
      x=x-2;
    }
    if (x == 0) {
      y=y-2;
    }
    client.send(JSON.stringify({ x: x, y: y}));
  });
}, 1);

ws_server.on('connection', (ws) => {
  console.log('New client connected!');
  ws.on('close', () => console.log('Client has disconnected!'));
});