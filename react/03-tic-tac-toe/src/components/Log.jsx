import getPlayer from "../utils/getPlayer";

export default function Log({ turns, players }) {
    return (
        <ol id="log">
            {turns.map((turn) => {
                const { row, col } = turn.square;
                const player = getPlayer(turn, players);
                return (
                    // 👇🏽 Aggiungiamo una chiave univoca per ogni elemento per far si che l'animazione animi il primo elemento
                    <li key={`${row}-${col}`}>
                        {player.name} played {player.symbol} at ({row}, {col})
                    </li>
                );
            })}
        </ol>
    );
}
