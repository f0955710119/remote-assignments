import React, { useState } from 'react';
import styled from 'styled-components';

import HeaderNavList from './HeaderNavList';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  height: 6rem;

  padding: 0 3rem;

  position: relative;

  & ion-icon {
    display: none;
    font-size: 2.4rem;
  }

  @media screen and (max-width: 50em) {
    & ion-icon[name='menu'] {
      display: ${(props) => (props.menuClicked ? 'none' : 'block')};

      cursor: pointer;
    }

    & ion-icon[name='close'] {
      display: ${(props) => (props.menuClicked ? 'block' : 'none')};

      position: fixed;
      top: 1.5rem;
      right: 1.5rem;

      z-index: 100;
    }
  }
`;

const Logo = styled.div`
  & a {
    &:link,
    &:visited {
      font-weight: 700;
    }
  }
`;

const HeaderNav = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  console.log(menuClicked);
  function clickMeunHandler() {
    setMenuClicked((previousState) => !previousState);
  }

  return (
    <Nav menuClicked={menuClicked}>
      <Logo>
        <a href="/">Website Title / Logo</a>
      </Logo>
      <ion-icon name="menu" onClick={clickMeunHandler}></ion-icon>
      <ion-icon name="close" onClick={clickMeunHandler}></ion-icon>
      <HeaderNavList onClickMenu={clickMeunHandler} menuClicked={menuClicked} />
    </Nav>
  );
};

export default HeaderNav;
