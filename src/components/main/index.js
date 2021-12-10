import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Intro, Navbar } from "..";
import { Gap, Logo, SocialIcon, Yinyang } from "../../subComponents";
import bg from "../../assets/img/old-paper.jpg";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  //  url(${bg});
  // background-size: cover;
  // background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const rotate = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;
const Text = styled.span`
  display: inline;
  position: absolute;
  top: 15%;
  left: 40%;
  font-family: "Karla", sans-serif;
  font-size: calc(1em + 0.5vw);

  & > :first-child {
    opacity: ${(props) => (props.click ? 0 : 1)};
    transition: 0.3s;
  }

  & > :nth-child(2) {
    top: ${(props) => (props.click ? "-350%" : "100%")};
    transition: 0.5s;
  }
`;
const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  top: ${(props) => (props.click ? "85%" : "50%")};
  z-index: 5;
  transition: 0.5s;
  & > :first-child {
    animation: ${rotate} 2s infinite linear;
  }
  & > :nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 1.2vw;
    opacity: ${(props) => (props.click ? 0 : 1)};
  }
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  console.log(click);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Navbar click={click} />
      <DarkDiv click={click} />
      <Gap height={30} />
      <Text click={click}>
        <h4>Welcome To My Web</h4>
        <Logo />
      </Text>

      <Center onClick={() => handleClick()} click={click}>
        <Yinyang click={click} />
        <p>Click Here!</p>
      </Center>

      <SocialIcon />
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
