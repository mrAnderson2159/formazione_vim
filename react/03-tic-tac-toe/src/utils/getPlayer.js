export default function getPlayer(turn, players) {
    return players.find((player) => player.symbol === turn.player).name;
}
