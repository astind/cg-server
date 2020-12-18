import { Card } from './card';

export class Deck {

  cards: Card[];

  constructor() {
    this.cards = [];
  }

  createNewDeck() {

  }

  shuffle() {

  }

  draw(): Card | undefined {
    return this.cards.shift();
  }

  play(index: number): Card {
    let cardPlayed = this.cards[index];
    this.cards.splice(index, 1);
    return cardPlayed;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

}
