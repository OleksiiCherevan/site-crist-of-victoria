import styled from "styled-components";
import {Link} from "react-router-dom";

import LOGO from '../assets/images/kisspng-victoria-cross.png';

const StyledHeader = styled.header`
  /* position: fixed; */
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  
  background-color: #282c3490;
  color: white;
`;

const Navigation = styled.nav`
  box-sizing: content-box;
  padding: 10px;
`;

const NavItems = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
  text-align: center;

  & > * {
    
  padding: 15px;
  }
  &>*:hover {
    border-radius: 10px;
    opacity: 0.9;
    background-color: #ffffff30;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Logo = styled.img`
  height: 60px;
`;

export default () => {
  return (
    <StyledHeader>
      <Link to="/">
        <LogoWrapper>

        <Logo src={LOGO} alt="MITIT"/>
        Хрест Вікторії
        </LogoWrapper>
      </Link>
      <Navigation>
        <NavItems>
          <NavItem className="nav-item">
            <Link to="/">Головна</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/about">Про сайт</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/gallery">Галерея</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/news">Головні новини</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/contacts">Контакти</Link>
          </NavItem>
        </NavItems>
      </Navigation>
    </StyledHeader>
  );
};
