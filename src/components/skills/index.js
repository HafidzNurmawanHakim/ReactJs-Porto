import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { Navbar } from "..";
import { BigTitle, Gap, ParticleComponent, SocialIcon } from "../../subComponents";
import {
   BootstrapIcon,
   CssIcon,
   Develope,
   FigmaIcon,
   Github,
   HtmlIcon,
   JsIcon,
   ReactIcon,
   RightChevron,
   SimpleRightChevron,
   VscodeIcon,
} from "../../subComponents/allSvg";
import HomeBtn from "../../subComponents/HomeBtn";
import { DarkTheme } from "../../theme/theme";
import spaceman from "../../assets/img/spaceman.png";
import { motion } from "framer-motion";
import HTML from "../../assets/img/Html & css Sertifikat.png";
import JS from "../../assets/img/JavaScript Serifikat.png";
import REACT from "../../assets/img/React Sertifikat.png";
import REACTJS from "../../assets/img/baba-studio-reactjs.jpg";
import MDIIcon from "../../assets/img/mdiicon.png";
import PYTHON from "../../assets/img/python.png";
import TAILWIND from "../../assets/img/tailwind.png";
import TYPESCRIPT from "../../assets/img/typescript.png";
import POSTMAN from "../../assets/img/postman.png";
import ReactHackerrank from "../../assets/img/HackerankCertify.png";
import ReactCoursera from "../../assets/img/CourseraCertify.png";
import { AnimatedPage } from "../../subComponents/AnimatedPage";

const Container = styled(motion.div)`
   width: 100%;
   height: 100vh;
   background-color: black;
`;
const Center = styled(motion.div)`
   width: 70vw;
   height: 70vh;
   position: absolute;
   padding: 3vw;
   left: 45%;
   top: 50%;
   transform: translate(-50%, -50%);
   box-sizing: border-box;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 6px;
   backdrop-filter: blur(6px);
   background-clip: padding-box;
   border: 2px solid transparent;
   z-index: 3;
`;

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px) }
  100% {transform: translateY(-10px)}
`;

const Title = styled(motion.span)`
   height: 1vw;
   display: flex;
   align-items: center;
   color: white;
   font-size: calc(0.8vw + 0.8vh);

   & > * {
      fill: white;
      margin-right: 15px;
   }
   svg {
      width: 2vw;
      min-width: 30px;
   }

   @media (max-width: 600px) {
      & {
         width: 100%;
      }
   }
`;
const Content = styled(motion.div)`
   padding-top: 2vw;
   display: flex;
   height: 90%;
   flex-direction: column;
   overflow-y: hidden;

   @media (max-width: 600px) {
      & {
         padding-top: 2vw;
         flex-direction: column;
      }
   }
   @media (max-width: 400px) {
      & {
         margin-left: 0.5em;
      }
   }
`;
const SkillSet = styled(motion.div)`
   width: 60%;
   color: whitesmoke;
   font-size: calc(0.8vw + 1vh);
   font-family: ${(props) => props.theme.fontFamily};

   h5 {
      margin-left: 10px;
      margin-bottom: 10px;
   }

   li {
      list-style: none;
      font-size: calc(0.6vw + 1vh);

      & > :first-child {
         position: relative;
         top: 6px;
         margin-right: 10px;
         transition: 0.2s;
         cursor: pointer;
         &:hover {
            transform: scale(1.05);
         }
      }
   }
   @media (max-width: 600px) {
      & {
         width: 100%;
         margin-bottom: 5px;
      }
   }
   @media (max-width: 400px) {
      & {
         margin-top: 5px;
      }
   }
   @media (max-width: 360px) {
      h5 {
         margin-bottom: 0;
      }
   }
`;

const Skill = styled.div`
   display: flex;
   & > :first-child {
      margin-right: 5vw;
   }

   .icon {
      width: 1.5vw;
      min-width: 18px;
   }

   ul > li.iconimg {
      font-size: 0.8em;
      margin-top: 0.2em;
      img {
         width: 1.2em;
         margin-right: 0.6em;
         margin-left: 0.1em;
         min-width: 18px;
      }
   }
`;

const Astronout = styled(motion.div)`
   position: absolute;
   width: 15vw;
   top: 5%;
   right: 5%;
   img {
      width: 100%;
   }

   animation: ${float} 4s ease infinite;
`;
const Sertificate = styled.div`
   width: 45%;
   padding: 2vw;
   position: absolute;
   top: 0;
   right: 0;
   box-sizing: border-box;
   height: 100%;

   h3 {
      color: whitesmoke;
      font-family: ${(props) => props.theme.fontFamily};
      font-size: 1em;
      margin-bottom: 10px;
      z-index: 9;
   }
   @media (max-width: 600px) {
      & {
         padding-top: 1.5em;
         position: relative;
         width: 100%;
         margin: auto;
         display: flex;
      }
      h3 {
         top: 1px;
         position: absolute;
      }
   }
   @media (max-width: 400px) {
      & {
         margin-top: 10px;
         flex-direction: column;
      }
   }
`;
const Image = styled.div`
   display: flex;
   overflow-x: scroll;
   overflow-y: hidden;

   img {
      width: 10vw;
      margin: 5px;
      cursor: pointer;
      box-sizing: border-box;
      transition: 0.3s;
      border-radius: 4px;

      &:hover {
         transform: scale(0.95);
         border: 2px solid #c5a57c;
      }
   }

   @media (max-width: 600px) {
      img {
         width: 12vw;
         margin: 1 2px 2px 3px;
      }
   }
   @media (max-width: 360px) {
      img {
         width: 12vw;
         margin: 1px 2px;
      }
   }
`;
const Preview = styled(motion.div)`
   cursor: pointer;
   position: relative;
   overflow: hidden;
   font-family: ${(props) => props.theme.fontFamily};
   border-radius: 4px;

   /* &::before {
    content: "Baba Studio Course";
    padding: 1vw;
    background: rgba(0, 0, 0, 0.6);
    color: whitesmoke;
    position: absolute;
    top: 100%;
    bottom: 4px;
    left: 0;
    right: 0;
    z-index: 7;
    opacity: 0;
    transition: 0.4s;
  } */

   &:hover::before {
      top: 60%;
      opacity: 1;
   }

   @media (max-width: 600px) {
      & {
         width: 80%;
      }
   }
`;

const WorkPlace = styled(motion.div)`
   height: 20vh;
   padding: 1em 1em;
   display: flex;
`;

const PinWorkPlace = styled(motion.div)`
   height: 100%;
   width: 5%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const PinLine = styled(motion.span)`
   background-color: green;
   width: 4px;
   height: 20vh;
   display: block;
   margin-top: -5px;
   margin-right: -4px;
   border-radius: 4px;
`;

const ContentWork = styled.div`
   width: 80%;

   & > .titleWork {
      color: whitesmoke;
      font-family: ${(props) => props.theme.fontFamily};
      display: flex;
      align-items: center;

      h3 {
         margin-right: 1em;

         span {
            font-size: 0.8em;
         }
      }
   }

   p.longtime {
      color: green;
      padding: 2px 5px;
      font-size: 0.7em;
      border: 1px solid green;
      display: inline-block;
      border-radius: 4px;
   }

   p.jabatan {
      font-size: 1em;
      margin-top: 0.8em;
      color: whitesmoke;
      font-family: ${(props) => props.theme.fontFamily};
   }

   p.jobdesk {
      display: flex;
      align-items: center;
      fill: whitesmoke;
      font-size: 1em;
      color: whitesmoke;
      font-family: ${(props) => props.theme.fontFamily};
      max-width: 28vw;

      svg {
         margin-bottom: 1.1em;
      }
   }
`;

const Skills = () => {
   const [previewImg, setPreviewImg] = useState(ReactHackerrank);

   return (
      <ThemeProvider theme={DarkTheme}>
         <AnimatedPage>
            <Container className="hidden">
               <BigTitle text="SKILL" top="15%" left="20%" color="#1F1D36" opacity="0.6" />
               <HomeBtn />
               <Navbar />
               <div className="social-icon">
                  <SocialIcon theme={DarkTheme} />
               </div>
               <ParticleComponent theme="dark" />
               <Center
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "75vh", opacity: 1 }}
                  transition={{ type: "spring", duration: 1, delay: 1 }}
               >
                  <Title
                     initial={{ y: -100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 1, delay: 1 }}
                  >
                     <Develope /> Skills & Work History
                  </Title>
                  <Content
                     initial={{ height: 0 }}
                     animate={{ height: "90%" }}
                     transition={{ duration: 1, delay: 1 }}
                  >
                     <WorkPlace
                        initial={{ height: 0 }}
                        animate={{ height: "20vh" }}
                        transition={{ duration: 1, delay: 1 }}
                     >
                        <PinWorkPlace>
                           <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ scale: [3, 0.9, 1.5, 1], opacity: 1, rotate: 90 }}
                              transition={{ type: "spring", duration: 2, delay: 2 }}
                              style={{ width: "24px" }}
                           >
                              <RightChevron />
                           </motion.div>
                           <PinLine
                              initial={{ height: 0 }}
                              animate={{ height: "20vh" }}
                              transition={{ delay: 2, duration: 2 }}
                           />
                        </PinWorkPlace>
                        <ContentWork>
                           <div className="titleWork">
                              <motion.h3
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 transition={{ duration: 2, delay: 3 }}
                              >
                                 <span>
                                    <p>Current Work Place</p>
                                 </span>
                                 Multidaya Integra
                              </motion.h3>
                              <motion.img
                                 initial={{ opacity: 0 }}
                                 animate={{ scale: [3, 0.9, 1.5, 1], opacity: 1 }}
                                 transition={{ type: "spring", duration: 1, delay: 3 }}
                                 src={MDIIcon}
                                 style={{ width: "3rem" }}
                              />
                           </div>
                           <motion.p
                              className="longtime"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 2, delay: 3 }}
                           >
                              February 2022 - Present
                           </motion.p>
                           <motion.p
                              className="jabatan"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 2, delay: 3 }}
                           >
                              Frontend Developer
                           </motion.p>
                           <motion.p
                              className="jobdesk"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 2, delay: 3 }}
                           >
                              <SimpleRightChevron />
                              Contributing to Developing and Maintenance Beacukai Website Ceisa and
                              Portal Pengguna Jasa
                           </motion.p>
                           <motion.p
                              className="jobdesk"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 2, delay: 3 }}
                           >
                              <SimpleRightChevron />
                              Make clean code and easy to maintenance include management state with
                              Redux or Context
                           </motion.p>
                        </ContentWork>
                     </WorkPlace>
                     <SkillSet
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                     >
                        <Skill>
                           <ul>
                              <h5>Skills</h5>
                              <li>
                                 <HtmlIcon className="icon" />
                                 Html & CSS
                              </li>

                              <li>
                                 <BootstrapIcon className="icon" />
                                 Bootstrap
                              </li>
                              <li>
                                 <JsIcon className="icon" />
                                 Javascript
                              </li>
                              <li>
                                 <ReactIcon className="icon" />
                                 React Js
                              </li>
                              <li className="iconimg">
                                 <img src={TYPESCRIPT} />
                                 Typescript
                              </li>
                              <li className="iconimg">
                                 <img src={TAILWIND} />
                                 Tailwind CSS
                              </li>
                              <li className="iconimg">
                                 <img src={PYTHON} />
                                 Python (Beginner)
                              </li>
                           </ul>
                           <ul>
                              <h5>Tools</h5>
                              <li>
                                 <VscodeIcon className="icon" />
                                 Vs Code
                              </li>
                              <li>
                                 <Github className="icon" />
                                 Git
                              </li>
                              <li className="iconimg">
                                 <img src={POSTMAN} />
                                 Postman
                              </li>
                           </ul>
                        </Skill>
                     </SkillSet>
                     <Sertificate>
                        <motion.h3
                           className="caption"
                           initial={{ y: -100, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ duration: 1, delay: 1 }}
                        >
                           Just as a complement, these are some of the trainings I've attended.
                        </motion.h3>
                        <Preview>
                           <motion.img
                              initial={{ y: 300 }}
                              animate={{ y: 0 }}
                              transition={{ type: "spring", duration: 1, delay: 1.2 }}
                              src={previewImg}
                              alt="Sertificate"
                              style={{ width: "100%" }}
                           />
                        </Preview>
                        <Image>
                           <motion.img
                              initial={{ y: 300, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ type: "spring", duration: 1, delay: 1.5 }}
                              src={ReactHackerrank}
                              onMouseEnter={() => setPreviewImg(ReactHackerrank)}
                              alt="sertificate"
                           />
                           <motion.img
                              initial={{ y: 300, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ type: "spring", duration: 1, delay: 1.5 }}
                              src={ReactCoursera}
                              onMouseEnter={() => setPreviewImg(ReactCoursera)}
                              alt="sertificate"
                           />
                           <motion.img
                              initial={{ y: 300, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ type: "spring", duration: 1, delay: 1.5 }}
                              src={REACTJS}
                              onMouseEnter={() => setPreviewImg(REACTJS)}
                              alt="sertificate"
                           />
                           <motion.img
                              initial={{ y: 300, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ type: "spring", duration: 1, delay: 1.8 }}
                              src={REACT}
                              onMouseEnter={() => setPreviewImg(REACT)}
                              alt="sertificate"
                           />
                           <motion.img
                              initial={{ y: 300, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ type: "spring", duration: 1, delay: 2 }}
                              src={JS}
                              onMouseEnter={() => setPreviewImg(JS)}
                              alt="sertificate"
                           />
                           <motion.img
                              initial={{ y: 300, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ type: "spring", duration: 1, delay: 2.2 }}
                              src={HTML}
                              onMouseEnter={() => setPreviewImg(HTML)}
                              alt="sertificate"
                           />
                        </Image>
                     </Sertificate>
                  </Content>
               </Center>
               <Astronout
                  initial={{ top: "120%", left: "120%" }}
                  animate={{ top: "5%", left: "80%" }}
                  transition={{ duration: 2, delay: 1 }}
               >
                  <img src={spaceman} alt="spaceman" />
               </Astronout>
            </Container>
         </AnimatedPage>
      </ThemeProvider>
   );
};

export default Skills;
