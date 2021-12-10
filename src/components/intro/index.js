import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";
import me from "../../assets/img/ava.png";
import { AirBallon } from "../../subComponents/allSvg";

const float = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
`;
const Box = styled(motion.div)`
  width: 60vw;
  height: 55vh;
  position: absolute;
  top: 17%;
  left: 20%;
  border: 2px solid ${(props) => props.theme.text};

  display: flex;
  justify-content: center;

  .ballon {
    position: fixed;
    width: 25vh;
    height: 50vh;
    right: 2%;
    animation: ${float} 3s infinite;
  }
`;
const DarkDiv = styled(motion.div)`
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${(props) => props.theme.text};
`;
const SubBox = styled(motion.div)`
  position: relative;
  width: 50%;
  height: 100%;
  box-sizing: border-box;

  h1,
  h3,
  h6 {
    color: ${(props) => props.theme.body};
  }

  .pic {
    position: absolute;
    bottom: -10px;
    width: 20vw;
    left: 18%;
  }
`;

const Text = styled(motion.div)`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: calc(1em + 1.5vw);

  & > :last-child {
    color: rgba(${(props) => props.theme.bodyRgb}, 0.7);
  }
`;

const Intro = (props) => {
  return (
    <Box initial={{ height: 0, width: 0 }} animate={{ height: "55vh", width: "60vw" }} transition={{ type: "spring", duration: 1 }}>
      <DarkDiv initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.5, delay: 0.3 }} />
      <SubBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
        <img src={me} alt="profil-pic" className="pic" />{" "}
      </SubBox>
      <SubBox>
        <Text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
          <h1>Hi,</h1>
          <h3>Im Hafidz</h3>
          <h6>Im Love to Code Simply Yet Beautiful Web</h6>
        </Text>
      </SubBox>
      <motion.div click={props.click} className="ballon" initial={{ top: "-50%" }} animate={{ top: "25%" }} transition={{ duration: 5, delay: 0.2 }}>
        <AirBallon />
      </motion.div>
    </Box>
  );
};

export default Intro;
