import React from "react";
import styled from "styled-components";

const SectionDefault = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 75em) {
    margin: 0 4rem;
  }
`;

const Section = (props) => {
  return <SectionDefault>{props.children}</SectionDefault>;
};

export default Section;
