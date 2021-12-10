import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HomeIcon } from "./allSvg";

const Link = styled(motion(NavLink))`
  position: absolute;
  top: 2vw;
  left: 2vw;
  cursor: pointer;
`;
const HomeBtn = () => {
  return (
    <Link to="/" initial={{ y: -100, scale: 1 }} animate={{ y: 0 }} transition={{ type: "spring", duration: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <HomeIcon height={30} width={30} />
    </Link>
  );
};

export default HomeBtn;
