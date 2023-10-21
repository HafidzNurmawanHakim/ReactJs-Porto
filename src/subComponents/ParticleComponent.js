import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import configLight from "../config/particlesjs-config-light.json";
import configDark from "../config/particlesjs-config.json";
const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;
const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles style={{ top: 0, position: "absolute" }} params={props.theme === "light" ? configLight : configDark} />
    </Box>
  );
};

export default ParticleComponent;
