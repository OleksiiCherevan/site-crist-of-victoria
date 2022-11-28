import React from 'react';
import styled from "styled-components";

const StyledContacts = styled.span`
  padding: 100px 0;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`

function Contacts() {
  return (
    <StyledContacts>
      <Title></Title>
    </StyledContacts>
  );
}

export default Contacts;