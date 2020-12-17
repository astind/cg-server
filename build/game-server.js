"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
var game_1 = require("./game");
var GameServer = /** @class */ (function () {
    function GameServer() {
        this.games = [];
    }
    GameServer.prototype.genGameId = function () {
        return '12ab';
    };
    GameServer.prototype.newGame = function () {
        var id = this.genGameId();
        this.games.push(new game_1.Game(id));
        return id;
    };
    return GameServer;
}());
exports.GameServer = GameServer;
