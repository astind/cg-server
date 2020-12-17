import { Game } from "./game";

export class GameServer {

  games: Game[];

  constructor() {
    this.games = [];
  }


  private genGameId(): string {
    return '12ab';
  }

  public newGame(): string {
    const id = this.genGameId();
    this.games.push(new Game(id));
    return id;
  }


}