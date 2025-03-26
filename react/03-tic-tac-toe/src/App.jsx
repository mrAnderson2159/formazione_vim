import { useState, useEffect } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { checkGameStatus } from "./utils/checkGameOver";
import { GAME_STATUS } from "./utils/constants";
import getPlayer from "./utils/getPlayer";
import GameOver from "./components/GameOver";

const players = [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
];

function initialGameBoard() {
    return [...Array(3)].map((_, index) => [null, null, null]);
}

function deriveActivePlayer(turns) {
    let currentPlayer = "X";

    if (turns.length > 0 && turns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [gameStatus, setGameStatus] = useState(GAME_STATUS.inProgress);
    const [currentGameBoard, setCurrentGameBoard] = useState(initialGameBoard);

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
            const newGameStatus = checkGameStatus(currentGameBoard);

            if (newGameStatus !== GAME_STATUS.inProgress) {
                setGameStatus(newGameStatus);
            }
        }
    }, [gameTurns]);

    return (
        <main>
            <div id="game-container">
                {gameStatus !== GAME_STATUS.inProgress && (
                    <GameOver
                        winner={
                            gameStatus === GAME_STATUS.win
                                ? getPlayer(gameTurns[0], players)
                                : null
                        }
                        onRestart={() => {
                            setGameTurns([]);
                            setCurrentGameBoard(initialGameBoard());
                            setGameStatus(GAME_STATUS.inProgress);
                        }}
                    />
                )}
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
                    gameBoard={currentGameBoard}
                    onSelectSquare={handleSelectSquare}
                    turns={gameTurns}
                />
            </div>
            <Log turns={gameTurns} players={players} />
        </main>
    );
}

export default App;
