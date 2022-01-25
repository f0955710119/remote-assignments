import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 4rem;

    & a {
      letter-spacing: 0.05rem;
    }
  }

  @media screen and (max-width: 50em) {
    padding: 2.04rem 1rem;
  }
`;

const HeaderNavItem = (props) => {
  const { id, title } = props;

  return (
    <NavItem key={id}>
      <a href="#">{title}</a>
    </NavItem>
  );
};

export default HeaderNavItem;
