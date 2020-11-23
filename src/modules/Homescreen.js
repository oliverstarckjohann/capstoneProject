import styled from "styled-components/macro";
import GlobalStyle, { createGlobalStyle } from "../components/GlobalStyle";
import image1 from "../img/bg.png";

export default function Homescreen() {
  function Buttondown() {
    console.log("Button Clicked");
  }
  return (
    <Contentbox>
      <Citiesmenu>
        <ButtonStyled onClick={Buttondown}>Berlin</ButtonStyled>
        <ButtonStyled onClick={Buttondown}>Hamburg</ButtonStyled>
        <ButtonStyled onClick={Buttondown}>München</ButtonStyled>
        <ButtonStyled onClick={Buttondown}>Köln</ButtonStyled>
      </Citiesmenu>
    </Contentbox>
  );
}

const Contentbox = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 650px;
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 0px;
  text-align: center;
  background-image: url(${image1});
  background-size: cover;
`;

const Citiesmenu = styled.section`
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const ButtonStyled = styled.button`
  font-size: 1.5em;
  text-align: center;
  padding: 0.6em;
  background-color: #636566;
  color: #24cac0;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
`;
