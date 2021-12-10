import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "..";
import bg from "../../assets/img/old-paper.jpg";
import { BigTitle, SocialIcon } from "../../subComponents";
import { AirBallon, ButterflyTap } from "../../subComponents/allSvg";
import HomeBtn from "../../subComponents/HomeBtn";

const float = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bg}) no-repeat;
  background-size: cover;
  z-index: -2;
  .ballon {
    position: fixed;
    width: 25vh;
    height: 50vh;
    right: 2%;
    animation: ${float} 3s infinite;
  }
`;
const Box = styled(motion.div)`
  width: 50vw;
  height: 60vh;
  border: 2px solid #000;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);

  padding: 2em;
`;

const Text = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    font-size: calc(0.6em + 1vw);
    font-family: ${(props) => props.theme.fontFamily};
  }
`;
const Tape = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftLine = styled(motion.span)`
  background-color: black;
  width: 45vw;
  height: 4px;
`;
const RightLine = styled(motion.span)`
  background-color: black;
  width: 45vw;
  height: 4px;
`;

const About = () => {
  return (
    <Container>
      <Navbar />
      <HomeBtn />
      <SocialIcon />
      <BigTitle text="ABOUT" top="20%" left="50%" color="#C5A57C" opacity="0.5" />
      <Box initial={{ height: 0, opacity: 0 }} animate={{ height: "60vh", opacity: 1 }} transition={{ type: "spring", duration: 1, delay: 1 }}>
        <Text>
          <span>Im Frontend Developer located in Indonesia I am a high school graduate who is very interested in IT.</span>
          <span>I've been learning about programming myself even now. I'm interested in the whole frontend stack Like trying new things and building great projects.</span>
          <span> In this Portofolio I want to show you my skill level</span>
        </Text>
      </Box>
      <motion.div className="ballon" initial={{ top: "-50%" }} animate={{ top: "50%" }} transition={{ duration: 7, delay: 0.2 }}>
        <AirBallon />
      </motion.div>
      <Tape className="hidden">
        <LeftLine initial={{ width: 0 }} animate={{ width: "45vw" }} transition={{ type: "spring", duration: 2, delay: 0.2 }} />
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1, delay: 1 }}>
          <ButterflyTap width={150} />
        </motion.div>
        <RightLine initial={{ width: 0 }} animate={{ width: "45vw" }} transition={{ type: "spring", duration: 2, delay: 0.2 }} />
      </Tape>
    </Container>
  );
};

export default About;
