"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var deck_1 = require("./deck");
var player_1 = require("./player");
var Game = /** @class */ (function () {
    function Game(id) {
        this.id = id;
        this.players = [];
        this.deck = new deck_1.Deck();
        this.cardsPlayed = [];
        this.discardDeck = new deck_1.Deck();
        this.hostId = null;
    }
    Game.prototype.play = function (playerid, card) {
    };
    Game.prototype.cleanRound = function () {
    };
    Game.prototype.genPlayerId = function () {
        return "p-" + this.players.length;
    };
    Game.prototype.getPlayers = function () {
        var playerList = [];
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var p = _a[_i];
            playerList.push({
                name: p.name, id: p.id
            });
        }
        return playerList;
    };
    Game.prototype.addPlayer = function (playerName, playerId) {
        if (this.players.length < 6) {
            if (!playerId) {
                playerId = this.genPlayerId();
            }
            this.players.push(new player_1.Player(playerName, playerId));
            if (this.players.length === 1) {
                this.hostId = playerId;
            }
            return true;
        }
        else {
            return false;
        }
    };
    Game.prototype.getHostId = function () {
        return this.hostId;
    };
    return Game;
}());
exports.Game = Game;
