import React from "react";
import styled from "styled-components";

const StyledModalWindow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  font-size: 50px;
`;

const ActionBlock = styled.div`
  width: 200px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 16px;
`;

export const ModalWindow = ({ winner, onCancel, onSubmit }) => (
  <StyledModalWindow>
    <Message>{`${winner} is winning! Are you ready to repeat?`}</Message>
    <ActionBlock>
      <Button onClick={onSubmit}>Yes, of course!</Button>
    </ActionBlock>
  </StyledModalWindow>
);
