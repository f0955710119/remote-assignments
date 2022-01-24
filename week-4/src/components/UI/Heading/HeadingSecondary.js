import React from "react";
import styled from "styled-components";

const HeadingSecondaryDefault = styled.h2`
  display: block;
  margin: 3rem 0;
  font-weight: 600;
  font-size: 2.4rem;
`;

const HeadingSecondary = (props) => {
  return <HeadingSecondaryDefault>{props.children}</HeadingSecondaryDefault>;
};

export default HeadingSecondary;
