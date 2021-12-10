import React from "react";
import styled, { keyframes } from "styled-components";
import { AirBallon } from "./allSvg";

const float = keyframes`
   0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
   

    
`;
const Box = styled.div`
  animation: ${float} 3s infinite;
`;
const BallonSvg = () => {
  return (
    <Box>
      <AirBallon width={200} height={300} />
    </Box>
  );
};

export default BallonSvg;
