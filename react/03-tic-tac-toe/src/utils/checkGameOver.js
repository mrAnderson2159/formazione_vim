import { GAME_STATUS } from "./constants";

export function checkGameOver(gameBoard) {
    // Check rows
    for (const row of gameBoard) {
        if (row.every((cell) => cell === row[0] && cell !== null)) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < gameBoard.length; i++) {
        if (
            gameBoard[0][i] === gameBoard[1][i] &&
            gameBoard[1][i] === gameBoard[2][i] &&
            gameBoard[0][i] !== null
        ) {
            return true;
        }
    }

    // Check diagonals
    for (const diagonal of ["first", "second"]) {
        const start = diagonal === "first" ? 0 : 2;
        const first = gameBoard[0][start];

        if (first === null) break;

        for (let i = 0; i < gameBoard.length; i++) {
            if (diagonal === "first") {
                if (gameBoard[i][i] !== first) break;
            } else {
                if (gameBoard[i][2 - i] !== first) break;
            }

            if (i === gameBoard.length - 1) return true;
        }
    }

    return false;
}

export function checkFullGameBoard(gameBoard) {
    return gameBoard.every((row) => row.every((cell) => cell !== null));
}

export function checkGameStatus(gameBoard) {
    if (checkGameOver(gameBoard)) {
        return GAME_STATUS.win;
    } else if (checkFullGameBoard(gameBoard)) {
        return GAME_STATUS.draw;
    }

    return GAME_STATUS.inProgress;
}
