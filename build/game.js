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
    Game.prototype.getPlayers = function () {
        return this.players.map(function (player) { return { id: player.id, name: player.name }; });
    };
    Game.prototype.addPlayer = function (playerId, playerName) {
        // check if player already exists in game
        if (this.players.every(function (player) { return player.id !== playerId; })) {
            // check if the game is full
            if (this.players.length >= 6) {
                // full 
                return false;
            }
            else {
                // add to game
                this.players.push(new player_1.Player(playerId, playerName));
                // mark as host if first player in
                if (this.players.length === 1) {
                    this.hostId = playerId;
                }
                return true;
            }
        }
        else {
            console.log("player: " + playerName + ", is already in the game");
            // return some kind of game stat info to the player??
            return true;
        }
    };
    Game.prototype.getHostId = function () {
        return this.hostId;
    };
    return Game;
}());
exports.Game = Game;
