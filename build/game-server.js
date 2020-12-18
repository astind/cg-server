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
    GameServer.prototype.joinGame = function (gameid, playerName, client) {
        var game = this.games[gameid];
        if (game) {
            var added = game.addPlayer(playerName);
            if (added) {
                if (this.clients[gameid]) {
                    this.clients[gameid].push(client);
                }
                else {
                    this.clients[gameid] = [client];
                }
                return { resp: 'joinGame', added: true, players: game.getPlayers() };
            }
            else {
                return { resp: 'joinGame', added: false, reason: 'full' };
            }
        }
        return { resp: 'joinGame', added: false, reason: 'not-found' };
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
