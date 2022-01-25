import React from 'react';
import styled from 'styled-components';

import HeaderNavItem from './HeaderNavItem';

const NavList = styled.ul`
  display: flex;

  @media screen and (max-width: 50em) {
    visibility: ${(props) => (props.menuClicked ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.menuClicked ? '1' : '0')};

    position: fixed;
    top: 0;
    right: 0;

    background-color: #fff;

    flex-direction: column;

    width: ${(props) => (props.menuClicked ? '50vw' : '0')};
    height: 100vh;

    transition: all 0.3s ease-out;
  }
`;

const DUMMY_CONTENTS = ['Item1', 'Item2', 'Item3', 'Item4'];
//
const NavItems = DUMMY_CONTENTS.map((item) => {
  return <HeaderNavItem key={item} id={item} title={item} />;
});

const HeaderNavList = (props) => {
  return <NavList menuClicked={props.menuClicked}>{NavItems}</NavList>;
};

export default HeaderNavList;
