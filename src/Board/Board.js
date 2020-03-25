import React from "react";
import styled from "styled-components";

import { Game } from "../GameClass";
import { Cell } from "../Cell/Cell";

const StyledBoard = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

export const Board = ({ board, onChange, currentUser }) => {
  const handleClick = col => () => {
    const higherRow = Game.findHigherFreeRow(board, col);
    const step = { row: higherRow, col };
    board[higherRow][col] = currentUser;

    if (Game.isWin(board, step, currentUser)) {
      Game.currentWinner = currentUser;
    }

    onChange([...board]);
  };

  return (
    <StyledBoard>
      {board.map((row, row_index) =>
        row.map((value, col_index) => (
          <Cell
            key={`${row_index}_${col_index}`}
            value={value}
            onClick={handleClick(col_index)}
          />
        ))
      )}
    </StyledBoard>
  );
};
