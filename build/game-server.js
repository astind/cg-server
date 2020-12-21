"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
var game_1 = require("./game");
var GameServer = /** @class */ (function () {
    function GameServer() {
        this.gameCounter = 0;
        this.games = {};
        this.clients = {};
    }
    GameServer.prototype.genGameId = function () {
        return 'cg' + this.gameCounter;
    };
    GameServer.prototype.newGame = function () {
        var id = this.genGameId();
        this.games[id] = new game_1.Game(id);
        this.gameCounter += 1;
        return id;
    };
    GameServer.prototype.joinGame = function (gameId, playerId, playerName) {
        var game = this.games[gameId];
        if (game) {
            // try to add to game
            var added = game.addPlayer(playerId, playerName);
            if (added) {
                // add new player to list of clients for game
                return { resp: 'joinGame', added: true, players: game.getPlayers() };
            }
            else {
                return { resp: 'joinGame', added: false, reason: 'full' };
            }
        }
        return { resp: 'joinGame', added: false, reason: 'not-found' };
    };
    GameServer.prototype.addClientToGame = function (gameId, client) {
        if (this.clients[gameId]) {
            this.clients[gameId].push(client);
        }
        else {
            this.clients[gameId] = [client];
        }
    };
    GameServer.prototype.getClients = function (gameid) {
        if (this.clients[gameid]) {
            return this.clients[gameid];
        }
        else {
            return [];
        }
    };
    return GameServer;
}());
exports.GameServer = GameServer;
