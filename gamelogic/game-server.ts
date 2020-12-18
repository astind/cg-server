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

  public joinGame(gameid: string, playerName: string, client: any): object {
    let game: Game = this.games[gameid];
    if (game) {
      let added = game.addPlayer(playerName);
      if (added) {
        if (this.clients[gameid]) {
          this.clients[gameid].push(client);
        } else {
          this.clients[gameid] = [client];
        }
        return { resp: 'joinGame', added: true, players: game.getPlayers() };
      } else {
        return { resp: 'joinGame', added: false, reason: 'full'};
      }
    }
    return { resp: 'joinGame', added: false, reason: 'not-found'};
  }

  public getClients(gameid: string) {
    if (this.clients[gameid]) {
      return this.clients[gameid];
    } else {
      return [];
    }
  }


}