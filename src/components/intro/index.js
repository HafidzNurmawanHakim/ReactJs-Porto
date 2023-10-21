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
   position: fixed;
   top: 17%;
   left: 20%;
   border: 2px solid ${(props) => props.theme.text};

   display: flex;
   justify-content: center;

   .ballon {
      position: fixed;
      width: 15vw;
      height: 50vh;
      right: 2%;
      animation: ${float} 3s infinite;
   }

   @media (max-width: 520px) {
      & {
         flex-direction: column;
      }
      .ballon {
         min-width: 100px;
         right: 23%;
      }
   }
`;
const DarkDiv = styled(motion.div)`
   position: absolute;
   width: 50%;
   top: 0;
   right: 0;
   height: 100%;
   background-color: ${(props) => props.theme.text};

   @media (max-width: 520px) {
      & {
         top: 50%;
         width: 55%;
         height: 50%;
         border-radius: 10px 0 0 0;
      }
   }
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
      left: 22%;
      max-height: 55vh;
      max-width: 16vw;
   }
   @media (max-width: 640px) {
      .pic {
         left: -5%;
      }
   }
   @media (max-width: 520px) {
      .pic {
         left: -20%;
         bottom: -100%;
      }
      h1 {
         font-size: 30px;
      }
      h3 {
         font-size: 20px;
      }
      h6 {
         font-size: 13px;
      }
   }
   @media (max-width: 400px) {
      .pic {
         min-height: 350px;
         min-width: 150px;
      }
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

   @media (max-width: 520px) {
      & {
         position: absolute;
         height: 100%;
         left: 100%;
         width: 100%;
         padding: 0.5rem;
      }
   }
`;

const Intro = (props) => {
   return (
      <Box
         initial={{ height: 0, width: 0 }}
         animate={{ height: "55vh", width: "60vw" }}
         transition={{ type: "spring", duration: 1 }}
      >
         <DarkDiv
            initial={{ height: 0 }}
            animate={{ height: `${window.screen.availWidth < 520 ? "50%" : "100%"}` }}
            transition={{ duration: 0.5, delay: 0.8 }}
         />
         <SubBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
         >
            <img src={me} alt="profil-pic" className="pic" />{" "}
         </SubBox>
         <SubBox>
            <Text
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.5 }}
            >
               <h1>Hi,</h1>
               <h3>Im Hafidz</h3>
               <h6>Im Love to Code Simply Yet Beautiful Web</h6>
            </Text>
         </SubBox>
         <motion.div
            click={props.click}
            className="ballon"
            initial={{ top: "-50%" }}
            animate={{ top: `${window.screen.availWidth < 520 ? "18%" : "25%"}` }}
            transition={{ duration: 5, delay: 0.2 }}
         >
            <AirBallon />
         </motion.div>
      </Box>
   );
};

export default Intro;
