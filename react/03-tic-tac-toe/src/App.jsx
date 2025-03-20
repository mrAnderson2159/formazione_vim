import { useState, useEffect } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { checkGameOver, checkFullGameBoard } from "./utils/checkGameOver";
import getPlayer from "./utils/getPlayer";

const initialGameBoard = [...Array(3)].map((_, index) => [null, null, null]);

const players = [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
];

function deriveActivePlayer(turns) {
    let currentPlayer = "X";

    if (turns.length > 0 && turns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [winner, setWinner] = useState(null);

    const currentPlayer = deriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

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

    useEffect(() => {
        if (gameTurns.length > 4) {
            if (checkGameOver(initialGameBoard)) {
                setWinner(getPlayer(gameTurns[0], players).name);
            } else if (checkFullGameBoard(initialGameBoard)) {
                setWinner("draw");
            }
        }
    }, [gameTurns]);

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    {players.map((player, index) => (
                        <Player
                            key={index}
                            name={player.name}
                            symbol={player.symbol}
                            isActive={currentPlayer === player.symbol}
                        />
                    ))}
                </ol>
                <GameBoard
                    gameBoard={initialGameBoard}
                    onSelectSquare={handleSelectSquare}
                    turns={gameTurns}
                />
            </div>
            <Log turns={gameTurns} players={players} />
        </main>
    );
}

export default App;
