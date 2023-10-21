import React from "react";
import styled from "styled-components";
import { BouncingBall } from "./allSvg";

const Div = styled.div`
  background: #f9e4c8;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  svg {
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: black;
  }
`;
const PreLoader = () => {
  return (
    <Div>
      <BouncingBall />
    </Div>
  );
};

export default PreLoader;
