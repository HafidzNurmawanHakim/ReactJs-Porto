import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "..";
import { BigTitle, Card, ParticleComponent, SocialIcon } from "../../subComponents";
import HomeBtn from "../../subComponents/HomeBtn";
import { LightTheme } from "../../theme/theme";
import { motion } from "framer-motion";
import { data } from "../../data/WorkData";
import { useEffect, useRef } from "react";
import { AnimatedPage } from "../../subComponents/AnimatedPage";

const Container = styled.div`
  height: 325vh;
  background-color: #c5a57c;

  @media (max-width: 480px) {
    height: 450vh;
  }
`;
const Center = styled(motion.div)`
  width: auto;
  height: 60vw;
  position: fixed;
  padding: 4vw;
  left: 10%;
  top: 10%;
  display: flex;

  @media (max-width: 480px) {
    margin: 20px 0 0 20px;
    flex-direction: column;
    height: auto;
  }
`;

const Skills = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const translate = () => {
      if (window.screen.availWidth < 481) {
        element.style.transform = `translateY(${-window.scrollY}px)`;
      } else {
        element.style.transform = `translateX(${-window.scrollY}px)`;
      }
    };
    window.addEventListener("scroll", translate);

    return () => window.removeEventListener("scroll", translate);
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <AnimatedPage>
        <Container className="hidden">
          <HomeBtn />
          <Navbar />
          <BigTitle text="WORK" top="75%" left="50%" color="#1F1D36" opacity="0.6" />
          <SocialIcon />
          <ParticleComponent theme="light" />
          <Center ref={ref} initial={{ height: 0, opacity: 0 }} animate={{ height: "70vh", opacity: 1 }} transition={{ type: "spring", duration: 1, delay: 1 }}>
            {data.map((data, index) => {
              return <Card data={data} key={index} />;
            })}
          </Center>
        </Container>
      </AnimatedPage>
    </ThemeProvider>
  );
};

export default Skills;
