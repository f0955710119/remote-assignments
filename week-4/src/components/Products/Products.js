import React, { useState } from "react";
import styled from "styled-components";

import Section from "../UI/Section/Section";
import HeadingSecondary from "../UI/Heading/HeadingSecondary";
import Button from "../UI/Button/ButtonCTA";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  & div {
    height: 20.4rem;
    background-color: #8899aa;
  }

  @media screen and (max-width: 31.25em) {
    grid-template-columns: 1fr;
  }
`;

const DUMMY_CONTENT = ["Content Box 1", "Content Box 2", "Content Box 3", "Content Box 4"];

const ProductItems = DUMMY_CONTENT.map((content) => {
  return <ProductItem key={content} id={content} content={content} />;
});

const Products = () => {
  const [clickedCTA, setClickedCTA] = useState(false);

  function clickCTAHandler() {
    setClickedCTA((previousState) => !previousState);
  }

  return (
    <Section>
      <HeadingSecondary>Section Title</HeadingSecondary>
      <Container>{ProductItems}</Container>
      <Button btn={{ onClick: clickCTAHandler }}>Call to Action</Button>
      {clickedCTA && <Container>{ProductItems}</Container>}
    </Section>
  );
};

export default Products;
