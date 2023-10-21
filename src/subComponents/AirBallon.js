import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import styled, { keyframes } from "styled-components";
import { AirBallon } from "./allSvg";

const float = keyframes`
   0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
   

    
`;
const Box = styled.div`
  animation: ${float} 3s infinite;
  background: red;
  width: 20px;
  height: 20px;
  display: block;
`;
const BallonSvg = () => {
  return (
    <Box>
      <AirBallon />
    </Box>
  );
};

export default BallonSvg;
