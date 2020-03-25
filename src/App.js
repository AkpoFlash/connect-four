import React, { useState, useEffect } from "react";

import { Game } from "./GameClass";
import {
  BOARD_COLUMN_COUNT,
  BOARD_ROW_COUNT,
  FIRST_PLAYER,
  SECOND_PLAYER
} from "./settings";

import { Board } from "./Board/Board";
import { ModalWindow } from "./ModalWindow/ModalWindow";

export const App = () => {
  const [currentUser, setCurrentUser] = useState(FIRST_PLAYER);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(Game.newGame(BOARD_ROW_COUNT, BOARD_COLUMN_COUNT));
  }, []);

  useEffect(
    () => {
      setCurrentUser(Game.nextStep(currentUser));
    },
    [board]
  );

  const handleRepeatGame = () => {
    setBoard(Game.newGame(BOARD_ROW_COUNT, BOARD_COLUMN_COUNT));
    setCurrentUser(SECOND_PLAYER);
  };

  return (
    <div className="App">
      {Game.currentWinner && (
        <ModalWindow winner={Game.currentWinner} onSubmit={handleRepeatGame} />
      )}
      <Board board={board} onChange={setBoard} currentUser={currentUser} />
    </div>
  );
};
