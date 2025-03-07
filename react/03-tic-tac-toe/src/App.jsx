import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
    const players = [
        { name: "Player 1", symbol: "X" },
        { name: "Player 2", symbol: "O" },
    ];

    const playersList = players.map((player, index) => (
        <Player key={index} name={player.name} symbol={player.symbol} />
    ));

    return (
        <main>
            <div id="game-container">
                <ol id="players">{playersList}</ol>
                <GameBoard />
            </div>
            LOG
        </main>
    );
}

export default App;
