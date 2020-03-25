import {
  BOARD_COLUMN_COUNT,
  BOARD_ROW_COUNT,
  COUNT_TO_WIN,
  FIRST_PLAYER,
  SECOND_PLAYER
} from "./settings";

export class Game {
  static currentWinner = null;

  static isHorizontalWin = (board, step, user) => {
    let winSequence = 1;
    const { row, col } = step;

    for (let i = col + 1; i < BOARD_COLUMN_COUNT; i++) {
      if (board[row][i] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    for (let i = col - 1; i >= 0; i--) {
      if (board[row][i] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    return winSequence >= COUNT_TO_WIN;
  };

  static isVerticalWin = (board, step, user) => {
    let winSequence = 1;
    const { row, col } = step;

    for (let i = row + 1; i < BOARD_ROW_COUNT; i++) {
      if (board[i][col] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    return winSequence >= COUNT_TO_WIN;
  };

  static isDecreasingDiagonalWin = (board, step, user) => {
    let winSequence = 1;
    const { row, col } = step;

    for (
      let i = row + 1, j = col + 1;
      i < BOARD_ROW_COUNT && j < BOARD_COLUMN_COUNT;
      i++, j++
    ) {
      if (board[i][j] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    return winSequence >= COUNT_TO_WIN;
  };

  static isIncreasingDiagonalWin = (board, step, user) => {
    let winSequence = 1;
    const { row, col } = step;

    for (
      let i = row - 1, j = col + 1;
      i >= 0 && j < BOARD_COLUMN_COUNT;
      i--, j++
    ) {
      if (board[i][j] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    for (
      let i = row + 1, j = col - 1;
      i < BOARD_ROW_COUNT && j >= 0;
      i++, j--
    ) {
      if (board[i][j] === user) {
        winSequence += 1;
      } else {
        break;
      }
    }

    return winSequence >= COUNT_TO_WIN;
  };

  static isWin = (board, step, user) =>
    Game.isHorizontalWin(board, step, user) ||
    Game.isVerticalWin(board, step, user) ||
    Game.isDecreasingDiagonalWin(board, step, user) ||
    Game.isIncreasingDiagonalWin(board, step, user);

  static findHigherFreeRow = (board, col) => {
    for (let row = BOARD_ROW_COUNT - 1; row >= 0; row--) {
      if (!board[row][col]) {
        return row;
      }
    }

    return null;
  };

  static newGame = (row, col) => {
    Game.currentWinner = null;

    return Array(row)
      .fill([])
      .map(() => Array(col).fill(null));
  };

  static nextStep = currentUser => {
    if (Game.currentWinner) {
      return null;
    }

    switch (currentUser) {
      case FIRST_PLAYER:
        return SECOND_PLAYER;
      case SECOND_PLAYER:
        return FIRST_PLAYER;
      default:
        return null;
    }
  };
}
