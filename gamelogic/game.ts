import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';

export class Game {

  id: string;
  players: Player[];
  deck : Deck;
  cardsPlayed: Card[];
  discardDeck: Deck;
  hostId: string | null;

  constructor(id: string) {
    this.id = id;
    this.players = [];
    this.deck = new Deck();
    this.cardsPlayed = [];
    this.discardDeck = new Deck();
    this.hostId = null;
  }

  play(playerid: string, card: Card) {

  }

  cleanRound() {

  }

  genPlayerId() {
    return "p-" + this.players.length;
  }

  getPlayers() {
    let playerList = [];
    for (const p of this.players) {
      playerList.push({
        name: p.name, id: p.id
      });
    }
    return playerList; 
  }

  addPlayer(playerName: string, playerId?: string): boolean {
    if (this.players.length < 6) {
      if (!playerId) {
        playerId = this.genPlayerId();
      }
      this.players.push(new Player(playerName, playerId));
      if (this.players.length === 1) {
        this.hostId = playerId;
      }
      return true;
    } else {
      return false;
    }
  }

  getHostId(): string | null {
    return this.hostId;
  }


}
