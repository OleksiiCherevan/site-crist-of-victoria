import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  
`
const Footer = () => {
  return (
    <StyledFooter>
        All the right are reserved.
    </StyledFooter>
  );
};

export default Footer;