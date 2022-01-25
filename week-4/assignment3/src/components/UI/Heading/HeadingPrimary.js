import React from "react";

const HeadingPrimary = (props) => {
  return <h1 {...props.headingPrimary}>{props.children}</h1>;
};

export default HeadingPrimary;
