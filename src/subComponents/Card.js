import React from "react";
import styled from "styled-components";
import { Github } from "./allSvg";

const Container = styled.div`
   width: 27vw;
   height: auto;
   padding: 1vw;
   position: relative;
   box-sizing: border-box;
   background: rgba(255, 255, 255, 0.3);
   border-radius: 4px 4px 4px 20px;
   margin-right: 20px;
   backdrop-filter: blur(3px);
   background-clip: padding-box;
   border: 2px solid transparent;
   z-index: 3;

   img {
      display: block;
      width: 95%;
      margin: auto;
      height: 40%;
   }

   @media (max-width: 760px) {
      & {
         min-width: 270px;
         height: 60vw;
         min-height: 400px;
      }
   }
   @media (max-width: 480px) {
      & {
         margin-bottom: 10px;
      }
   }
`;
const Title = styled.h3`
   margin: 10px;
   display: block;
   font-family: ${(props) => props.theme.fontFamily};
`;
const Caption = styled.p`
   font-size: calc(0.5vw + 0.6em);
   font-family: "Poppins", sans-serif;
`;
const Tags = styled.span`
   display: flex;
   flex-wrap: wrap;
   margin: 5px 0;
   font-size: calc(0.5vw + 0.5em);

   p {
      margin: 3px 5px;
      background: black;
      color: white;
      padding: 1px 8px 3px 8px;
      border-radius: 10px;
   }
`;
const Button = styled.div`
   height: 4em;
   padding: 0 20px;
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   & > :first-child:hover {
      cursor: pointer;
      transition: 0.3s;
      transform: scale(1.1);
   }
   & > :last-child {
      padding: 10px 20px;
      border-radius: 3px;
      background: #000;
      color: #c5a57c;
      border: none;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
         background: #c5a57c;
         border: 2px solid #000;
         color: #000;
      }
   }
`;
const Link = styled.a`
   text-decoration: none;
   color: ${(props) => props.theme.body};

   &:hover {
      color: ${(props) => props.theme.text};
   }
`;

const Status = styled.div`
   background: green;
   display: inline-block;
   padding: 4px 6px;
   color: whitesmoke;
   border-radius: 4px;
`;
const Card = (props) => {
   const { image, title, caption, tags, github, demo, status } = props.data;
   return (
      <Container>
         <img src={image} alt="" />

         <Title>{title}</Title>
         <Caption>{caption}</Caption>
         <Tags>
            {tags.map((tag, i) => (
               <p key={i}>#{tag}</p>
            ))}
         </Tags>
         {status && <Status>{status}</Status>}
         <Button>
            <Link target="_blank" href={github} style={{ opacity: github === "" ? 0 : 1 }}>
               <Github width={30} height={30} />
            </Link>

            <button style={{ opacity: demo === "" ? 0 : 1 }}>
               <Link target="_blank" href={demo}>
                  Visit
               </Link>
            </button>
         </Button>
      </Container>
   );
};

export default Card;
