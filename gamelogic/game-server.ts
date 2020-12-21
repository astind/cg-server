import { Game } from "./game";

export class GameServer {

  games: any;
  clients: any;
  gameCounter = 0;

  constructor() {
    this.games = {};
    this.clients = {};
  }


  private genGameId(): string {
    return 'cg' + this.gameCounter;
  }

  public newGame(): string {
    const id = this.genGameId();
    this.games[id] = new Game(id);
    this.gameCounter += 1;
    return id;
  }

  public joinGame(gameId: string, playerId: string, playerName: string): object {
    let game: Game = this.games[gameId];
    if (game) {
      // try to add to game
      let added = game.addPlayer(playerId, playerName);
      if (added) {
        // add new player to list of clients for game
        
        return { resp: 'joinGame', added: true, players: game.getPlayers() };
      } else {
        return { resp: 'joinGame', added: false, reason: 'full'};
      }
    }
    return { resp: 'joinGame', added: false, reason: 'not-found'};
  }

  public addClientToGame(gameId: string, client: any) {
    if (this.clients[gameId]) {
      this.clients[gameId].push(client);
    } else {
      this.clients[gameId] = [client];
    }
  }

  public getClients(gameid: string) {
    if (this.clients[gameid]) {
      return this.clients[gameid];
    } else {
      return [];
    }
  }


}