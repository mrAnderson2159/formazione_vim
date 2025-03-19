function getPlayer(turn, players) {
    return players.find((player) => player.symbol === turn.player);
}

export default function Log({ turns, players }) {
    return (
        <ol id="log">
            {turns.map((turn, index) => {
                const { row, col } = turn.square;
                const player = getPlayer(turn, players);
                return (
                    <li key={index}>
                        {player.name} played {player.symbol} at ({row}, {col})
                    </li>
                );
            })}
        </ol>
    );
}
