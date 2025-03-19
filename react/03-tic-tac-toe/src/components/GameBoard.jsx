import { useState } from "react";

const initialGameBoard = [...Array(3)].map((_, index) => [null, null, null]);

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectCell = (x, y, sym) => {
    //     setGameBoard((prevGameBoard) => {
    //         // NON MUTARE prevGameBoard, crea una copia e poi modificala
    //         const newGameBoard = [...prevGameBoard];
    //         newGameBoard[x] = [...newGameBoard[x]]; // Cloniamo soltanto la riga interessata, le altre saranno puntatori a quelle originali
    //         newGameBoard[x][y] = sym;
    //         return newGameBoard;
    //     });

    //     onSelectSquare();
    // };

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        onSelectSquare(rowIndex, colIndex)
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
