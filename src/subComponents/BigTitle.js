import React from "react";
import styled from "styled-components";

const Text = styled.span`
  position: fixed;
  font-size: 10vw;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  color: ${(props) => props.color};
  z-index: 0;
  opacity: ${(props) => props.opacity};
`;
const BigTitle = ({ text, top, color, opacity, left }) => {
  return <Text style={{ top: top, left: left, color: color, opacity: opacity }}>{text}</Text>;
};

export default BigTitle;
