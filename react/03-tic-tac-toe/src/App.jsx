import { useState, useEffect } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const players = [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
];

function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            let currentPlayer = "X";

            // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
            //     currentPlayer = "O";
            // }

            if (prevTurns.length > 0) {
                if (prevTurns[0].player === "X") {
                    currentPlayer = "O";
                }

                for (const turn of prevTurns) {
                    const { row, col } = turn.square;

                    if (row === rowIndex && col === colIndex) {
                        return prevTurns;
                    }
                }
            }

            setActivePlayer((prev) => (prev === "X" ? "O" : "X"));

            return [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex,
                    },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    {players.map((player, index) => (
                        <Player
                            key={index}
                            name={player.name}
                            symbol={player.symbol}
                            isActive={activePlayer === player.symbol}
                        />
                    ))}
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    turns={gameTurns}
                />
            </div>
            <Log turns={gameTurns} players={players} />
        </main>
    );
}

export default App;
