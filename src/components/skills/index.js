import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Gap, ParticleComponent } from "../../subComponents";
import { BootstrapIcon, CssIcon, Develope, FigmaIcon, Github, HtmlIcon, JsIcon, ReactIcon, VscodeIcon } from "../../subComponents/allSvg";
import { DarkTheme } from "../../theme/theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
const Center = styled.div`
  width: 70vw;
  height: 70vh;
  position: absolute;
  padding: 4vw;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  backdrop-filter: blur(30px);
  background-clip: padding-box;
  border: 2px solid transparent;
  z-index: 3;
`;

const Title = styled.span`
  height: 3rem;
  display: flex;
  align-items: center;
  color: whitesmoke;
  font-size: calc(1.5vw + 1.2vh);

  & > * {
    fill: white;
    margin-right: 15px;
  }
`;
const Content = styled.div`
  padding-top: 2em;
  display: flex;
`;
const Text = styled.div`
  width: 60%;
  color: whitesmoke;
  font-size: calc(1vw + 1.4vh);
  font-family: ${(props) => props.theme.fontFamily};

  h5 {
    margin-left: 10px;
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    font-size: calc(1vw + 1vh);

    & > :first-child {
      position: relative;
      top: 6px;
      margin-right: 10px;
    }
  }
`;

const Skill = styled.div`
  display: flex;
  & > :first-child {
    margin-right: 5vw;
  }
`;
const Image = styled.div``;

const Skills = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <ParticleComponent theme="dark" />
        <Center>
          <Title>
            <Develope width={60} height={60} /> Frontend Develope
          </Title>
          <Content>
            <Text>
              <p>I like to realize new ideas, especially in the interface of a website. making the website come alive is a fun challenge</p>
              <Gap height={10} />
              <Skill>
                <ul>
                  <h5>Skills</h5>
                  <li>
                    <HtmlIcon height={25} width={25} />
                    Html
                  </li>
                  <li>
                    <CssIcon height={25} width={25} />
                    Css
                  </li>
                  <li>
                    <BootstrapIcon height={25} width={25} />
                    Bootstrap
                  </li>
                  <li>
                    <JsIcon height={25} width={25} />
                    Javascript
                  </li>
                  <li>
                    <ReactIcon height={25} width={25} />
                    React Js
                  </li>
                </ul>
                <ul>
                  <h5>Tools</h5>
                  <li>
                    <VscodeIcon height={25} width={25} />
                    Vs Code
                  </li>
                  <li>
                    <Github height={25} width={25} />
                    Git
                  </li>
                  <li>
                    <FigmaIcon height={25} width={25} />
                    Figma
                  </li>
                </ul>
              </Skill>
            </Text>
            <Image> test</Image>
          </Content>
        </Center>
      </Container>
    </ThemeProvider>
  );
};

export default Skills;
