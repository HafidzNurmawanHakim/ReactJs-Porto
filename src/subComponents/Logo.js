import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: absolute;
  font-family: "Ubuntu Mono", monospace;
`;

const Logo = (props) => {
  return <Text click={props.click}>Portofolio.</Text>;
};

export default Logo;
