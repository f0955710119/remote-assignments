import React from "react";
import styled from "styled-components";

const Item = styled.div`
  height: 20.4rem;
  background-color: #8899aa;
`;

const ProductItem = (props) => {
  const { id, content } = props;

  return <Item key={id}>{content}</Item>;
};

export default ProductItem;
