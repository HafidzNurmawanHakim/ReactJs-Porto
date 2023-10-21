import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "..";
import bg from "../../assets/img/old-paper.jpg";
import { BigTitle, SocialIcon } from "../../subComponents";
import { AirBallon, ButterflyTap } from "../../subComponents/allSvg";
import { AnimatedPage } from "../../subComponents/AnimatedPage";
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
      width: 25vw;
      height: 50vh;
      right: 2%;
      animation: ${float} 3s infinite;
   }
`;
const Box = styled(motion.div)`
   width: 50vw;
   height: 60vh;
   border-radius: 3px;
   position: absolute;
   background: rgba(0, 0, 0, 0.15);
   border-radius: 4px 4px 4px 20px;
   margin-right: 20px;
   backdrop-filter: blur(3px);
   background-clip: padding-box;
   top: 50%;
   left: 45%;
   transform: translate(-50%, -50%);
   padding: 2em;

   @media (max-width: 400px) {
      & {
         top: 45%;
         height: 35vh;
      }
   }
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

   button {
      position: absolute;
      border: none;
      right: 2em;
      bottom: 2em;
      border-radius: 5px;
      padding: calc(1vw + 0.5vh) calc(1vw + 1vh);
      font-size: calc(1vw + 0.5vh);
      background: black;
      color: wheat;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
         transform: scale(1.05);
      }
      &:active {
         transform: scale(0.95);
      }
   }
`;
const Tape = styled.div`
   position: absolute;
   width: 100%;
   bottom: 0%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media (max-width: 400px) {
      & {
         bottom: 7%;
      }
   }
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
      <AnimatedPage>
         <Container>
            <Navbar />
            <HomeBtn />
            <SocialIcon />
            <BigTitle text="ABOUT" top="20%" left="50%" color="#C5A57C" opacity="0.5" />
            <Box
               initial={{ height: 0, opacity: 0 }}
               animate={{
                  height: `${window.screen.availWidth < 400 ? "40vh" : "60vh"}`,
                  opacity: 1,
               }}
               transition={{ type: "spring", duration: 1.5, delay: 1 }}
            >
               <Text>
                  <span>
                     Im Frontend Developer located in Indonesia I am a high school graduate who is
                     very interested in IT.
                  </span>
                  <span>
                     {" "}
                     I'm interested in the whole frontend stack Like trying new things and building
                     great projects.
                  </span>
                  <span>
                     {" "}
                     I want a career in software development. I hope, I can meet great people and
                     get knowledge from them
                  </span>

                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://drive.google.com/file/d/1oOWxYABkpupyIb8HLqlsaTWQWnF20C8m/view?usp=share_link"
                  >
                     <button>Download Cv</button>
                  </a>
               </Text>
            </Box>
            <motion.div
               className="ballon"
               initial={{ top: "-50%" }}
               animate={{ top: `${window.screen.availWidth < 400 ? "30%" : "20%"}` }}
               transition={{ duration: 7, delay: 0.2 }}
            >
               <AirBallon />
            </motion.div>
            <Tape className="hidden">
               <LeftLine
                  initial={{ width: 0 }}
                  animate={{ width: "45vw" }}
                  transition={{ type: "spring", duration: 2, delay: 0.2 }}
               />
               <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", duration: 1, delay: 1 }}
               >
                  <ButterflyTap width={150} />
               </motion.div>
               <RightLine
                  initial={{ width: 0 }}
                  animate={{ width: "45vw" }}
                  transition={{ type: "spring", duration: 2, delay: 0.2 }}
               />
            </Tape>
         </Container>
      </AnimatedPage>
   );
};

export default About;
