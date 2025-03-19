import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

const players = [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
];

const playersList = players.map((player, index) => (
    <Player key={index} name={player.name} symbol={player.symbol} />
));

function App() {
    const [currentPlayer, setCurrentPlayer] = useState("X");

    function togglePlayer() {
        setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players">{playersList}</ol>
                <GameBoard
                    onSelectSquare={togglePlayer}
                    currentPlayer={currentPlayer}
                />
            </div>
            LOG
        </main>
    );
}

export default App;
