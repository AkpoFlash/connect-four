import React from "react";
import styled from "styled-components";

import { BOARD_ROW_COUNT, BOARD_COLUMN_COUNT, FIRST_PLAYER } from "../settings";

const StyledCell = styled.div`
  width: calc(100vw / ${BOARD_COLUMN_COUNT});
  height: calc(100vh / ${BOARD_ROW_COUNT});
  background-color: ${props =>
    props.value ? (props.value === FIRST_PLAYER ? "#f00" : "#0f0") : "#fff"};
  outline: 1px solid #ccc;
  cursor: pointer;

  &:hover&:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    margin-left: calc(calc(calc(100vw / ${BOARD_COLUMN_COUNT}) / 2) - 20px);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #f00;
  }
`;

export const Cell = ({ value, onClick }) => {
  return <StyledCell value={value} onClick={onClick} />;
};
