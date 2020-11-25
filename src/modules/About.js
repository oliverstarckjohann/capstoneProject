import styled from "styled-components/macro";
import GlobalStyle, { createGlobalStyle } from "../components/GlobalStyle";
import image2 from "../img/bg02.png";

export default function About() {
  return (
    <Contentbox>
      <AboutContent>
        Diese App sagt Dir jeden Tag, was Du anziehen kannst. Oliver
        Starckjohann
      </AboutContent>
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
  background-image: url(${image2});
  background-size: cover;
`;

const AboutContent = styled.section`
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
