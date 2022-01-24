import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs((props) => {
  props.customStyle;
})`
  font-size: 1.8rem;
  border: none;
  cursor: pointer;

  margin: 2rem 0;
  padding: 2rem 1.2rem;
  background-color: #ddeeff;
`;

const ButtonCTA = (props) => {
  return <Button {...props.btn}>{props.children}</Button>;
};

export default ButtonCTA;
