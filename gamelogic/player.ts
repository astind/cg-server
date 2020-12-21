import { Deck } from './deck';


export class Player {

  name: string;
  score: number = 0;
  handCount: number = 0;
  hand: Deck;
  id: string;

  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
    this.hand = new Deck();
  }

}
