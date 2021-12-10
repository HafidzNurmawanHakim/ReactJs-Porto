import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(motion(NavLink))`
  font-family: "M PLUS 1 Code", sans-serif;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: calc(0.5rem + 1vw);
  padding: 5px 10px;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.text};
  z-index: 5;
  font-weight: bold;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.text};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease;
    z-index: -1;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
    color: ${(props) => props.theme.body};
  }
  &:hover {
    color: ${(props) => props.theme.body};
    box-sizing: border-box;
  }
`;
const Nav = styled.nav`
  position: fixed;
  width: 100%;
`;
const Menu = styled.nav`
  height: 60px;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > *:first-child,
  & > *:nth-child(2),
  & > *:nth-child(3) {
    transform: translateX(${(props) => (props.click ? "-250" : "0")}px);
    transition: 0.5s;
  }
  & > *:nth-child(4) {
    transform: translateX(${(props) => (props.click ? "270" : "0")}px);
    transition: 0.5s;
  }
`;
const Navbar = (props) => {
  return (
    <Nav>
      <Menu click={props.click}>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/work">Work</Link>
        <Link to="">Say Hii..</Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
