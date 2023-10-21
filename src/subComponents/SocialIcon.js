import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Instagram, Linkedin } from "./allSvg";

const Icons = styled.div`
   position: fixed;
   top: 30%;
   left: 3%;
   height: 240px;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   z-index: 5;

   @media (max-width: 400px) {
      & {
         top: 90%;
         left: 24%;
         flex-direction: row;
      }
   }
`;
const Link = styled.a`
   cursor: pointer;
   svg {
      fill: ${(props) => props.theme.text};
   }

   @media (max-width: 400px) {
      & {
         margin-right: 10px;
      }
   }
`;

const SocialIcon = (props) => {
   return (
      <Icons>
         <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, scale: [3, 0.9, 1], opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.4 }}
         >
            <Link href="https://github.com/HafidzNurmawanHakim" target="_blank">
               <Github width={40} height={40} />
            </Link>
         </motion.div>
         <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, scale: [3, 0.9, 1], opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.6 }}
         >
            <Link href="https://web.facebook.com/Hafidz.Nurmawan.Hakim/" target="_blank">
               <Facebook width={40} height={40} />
            </Link>
         </motion.div>
         <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, scale: [3, 0.9, 1], opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.8 }}
         >
            <Link href="https://www.instagram.com/hafidz_nh" target="_blank">
               <Instagram width={40} height={40} />
            </Link>
         </motion.div>
         <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, scale: [3, 0.9, 1], opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 1 }}
         >
            <Link href="https://www.linkedin.com/in/hafidznurmawan" target="_blank">
               <Linkedin width={40} height={40} />
            </Link>
         </motion.div>
      </Icons>
   );
};

export default SocialIcon;
