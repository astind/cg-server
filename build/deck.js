"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
    }
    Deck.prototype.createNewDeck = function () {
    };
    Deck.prototype.shuffle = function () {
    };
    Deck.prototype.draw = function () {
        return this.cards.shift();
    };
    Deck.prototype.play = function (index) {
        var cardPlayed = this.cards[index];
        this.cards.splice(index, 1);
        return cardPlayed;
    };
    Deck.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    return Deck;
}());
exports.Deck = Deck;
