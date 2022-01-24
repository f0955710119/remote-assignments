import React from 'react';
import styled from 'styled-components';

import HeaderNav from './HeaderNav/HeaderNav';

const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24rem;
  background-color: #ccddee;

  & h1 {
    font-weight: 900;
  }
`;

const Header = () => {
  return (
    <HeaderBar>
      <HeaderNav />
      <Hero>
        <h1>Welcome Message</h1>
      </Hero>
    </HeaderBar>
  );
};

export default Header;
