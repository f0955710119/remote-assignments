import React from "react";
import styled from "styled-components";

const BoxDefault = styled.div`
  height: 20.4rem;
  background-color: #8899aa;
`;

const Box = (props) => {
  return <BoxDefault>{props.children}</BoxDefault>;
};

export default Box;
