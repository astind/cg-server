const WebSocket = require("ws");
const http = require('http');
const cg = require('./build/cg-module');
const { v4: uuidv4 } = require('uuid');

const server = http.createServer();

const wss = new WebSocket.Server({ server });

var gameServer = cg.cgServer();

wss.on('connection', function connection(ws) {

  const connId = uuidv4();
  console.log(`connection: ${connId}`);
  ws.send(JSON.stringify({ resp: 'connected', id: connId }));

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
        var existingPlayers = gameServer.getClients(msg.gameId);
        response = gameServer.joinGame(msg.gameId, msg.playerId, msg.playerName);
        ws.send(JSON.stringify(response));
        if (response.added === true && existingPlayers.length > 0) {
          for (const conn of existingPlayers) {
            conn.send(JSON.stringify({ resp: 'addPlayer', player: { id: msg.playerId, name: msg.playerName } }));
          }
        }
        gameServer.addClientToGame(msg.gameId, ws);
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
