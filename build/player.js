"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var deck_1 = require("./deck");
var Player = /** @class */ (function () {
    function Player(name, id) {
        this.score = 0;
        this.handCount = 0;
        this.name = name;
        this.id = id;
        this.hand = new deck_1.Deck();
    }
    return Player;
}());
exports.Player = Player;
