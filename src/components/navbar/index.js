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
  z-index: 6;
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

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

    a {
      color: ${(props) => props.theme.body};
    }
  }
`;
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 5;
`;
const Menu = styled.nav`
  height: 60px;
  margin: auto;
  width: 40%;
  min-width: 270px;
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
  @media (max-width: 900px) {
    & > *:first-child,
    & > *:nth-child(2),
    & > *:nth-child(3) {
      transform: translateX(${(props) => (props.click ? "-230" : "0")}px);
      transition: 0.5s;
    }
    & > *:nth-child(4) {
      transform: translateX(${(props) => (props.click ? "230" : "0")}px);
      transition: 0.5s;
    }
  }
  @media (max-width: 760px) {
    & > *:first-child,
    & > *:nth-child(2),
    & > *:nth-child(3) {
      transform: translateX(${(props) => (props.click ? "-180" : "0")}px);
      transition: 0.5s;
    }
    & > *:nth-child(4) {
      transform: translateX(${(props) => (props.click ? "180" : "0")}px);
      transition: 0.5s;
    }
  }
  @media (max-width: 640px) {
    & > *:first-child,
    & > *:nth-child(2),
    & > *:nth-child(3) {
      transform: translateX(${(props) => (props.click ? "-130" : "0")}px);
      transition: 0.5s;
    }
    & > *:nth-child(4) {
      transform: translateX(${(props) => (props.click ? "130" : "0")}px);
      transition: 0.5s;
    }
  }
  @media (max-width: 520px) {
    & > *:first-child,
    & > *:nth-child(2),
    & > *:nth-child(3) {
      transform: translateX(${(props) => (props.click ? "-50" : "0")}px);
      transition: 0.5s;
    }
    & > *:nth-child(4) {
      transform: translateX(${(props) => (props.click ? "50" : "0")}px);
      transition: 0.5s;
    }
  }
  @media (max-width: 360px) {
    & > *:first-child,
    & > *:nth-child(2),
    & > *:nth-child(3) {
      transform: translateX(${(props) => (props.click ? "0" : "0")}px);
      transition: 0.5s;
    }
    & > *:nth-child(4) {
      transform: translateX(${(props) => (props.click ? "0" : "0")}px);
      transition: 0.5s;
    }
  }
`;
const Navbar = (props) => {
  return (
    <Nav>
      <Menu click={props.click}>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/work">Work</Link>
        <Link to="/wa" target="_blank">
          Say Hi...
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
