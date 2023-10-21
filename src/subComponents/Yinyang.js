import React from "react";
import styled, { keyframes } from "styled-components";
import { Circle } from "./allSvg";

const Box = styled.div`
  & > :first-child {
    transition: 0.5s;
    width: ${(props) => (props.click ? "130px" : "200px")};
  }

  @media (max-width: 400px) {
    & > :first-child {
      width: ${(props) => (props.click ? "80px" : "200px")};
    }
  }
`;

const Yinyang = (props) => {
  return (
    <Box click={props.click}>
      <Circle />
    </Box>
  );
};

export default Yinyang;
