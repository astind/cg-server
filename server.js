const WebSocket = require("ws");
const http = require('http');
const cg = require('./build/cg-server');
const server = http.createServer();

const wss = new WebSocket.Server({ server });

var gameServer = cg.cgServer();

wss.on('connection', function connection(ws) {
  console.log('connected');
  ws.on('message', function incoming(data) {

    var msg = JSON.parse(data);
    console.log(msg);
    var response;

    switch (msg.cmd) {
      case "newGame":
        console.log('new game!');
        const gameId = gameServer.newGame();
        response = { resp: 'newGame', id: gameId };
        ws.send(JSON.stringify(response));
        break;

      case "joinGame":
        console.log('join game');
        response = gameServer.joinGame(msg.gameId, msg.playerName, ws);
        ws.send(JSON.stringify(response));
        break;
    
      default:
        console.log('default!');
        response = { resp: 'Hello Back' };
        ws.send(JSON.stringify(response));
        break;
    }


    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(JSON.stringify(response));
    //   }
    // });
  })

});

server.listen(8122);
