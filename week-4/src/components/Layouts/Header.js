import React, { useState } from "react";
import styled from "styled-components";

import HeaderNav from "./HeaderNav/HeaderNav";
import HeadingPrimary from "../UI/Heading/HeadingPrimary";

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
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome Message");

  function clickWelcomeMessage() {
    setWelcomeMessage("Have a Good Time!");
  }

  return (
    <HeaderBar>
      <HeaderNav />
      <Hero>
        <HeadingPrimary headingPrimary={{ onClick: clickWelcomeMessage }}>
          {welcomeMessage}
        </HeadingPrimary>
      </Hero>
    </HeaderBar>
  );
};

export default Header;
