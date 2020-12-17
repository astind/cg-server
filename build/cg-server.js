const { GameServer } = require("./game-server")

exports.cgServer = function () {
  return new GameServer();
}