import React from 'react';
import styled from "styled-components";

const StyledButton = styled.span`
  cursor: pointer;
  padding: 5px 30px;
  aspect-ratio: 4/1;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s all;
  background-color: #f0f0f020;
  
  &:hover {
    transform: scale(1.2);
  }
  
`

function Button(props) {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  );
}

export default Button;