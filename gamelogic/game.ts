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

  getPlayers() {
    return this.players.map( (player) => { return {id: player.id, name: player.name } });
  }

  addPlayer(playerId: string, playerName: string, ): boolean {
    // check if player already exists in game
    if (this.players.every( (player) => { return player.id !== playerId })) {
      // check if the game is full
      if (this.players.length >= 6) {
        // full 
        return false;
      } else {
        // add to game
        this.players.push(new Player(playerId, playerName));
        // mark as host if first player in
        if (this.players.length === 1) {
          this.hostId = playerId;
        }
        return true;
      }
    } else {
      console.log(`player: ${playerName}, is already in the game`);
      // return some kind of game stat info to the player??
      return true
    }
    
  }

  getHostId(): string | null {
    return this.hostId;
  }


}
