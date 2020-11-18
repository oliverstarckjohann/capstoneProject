import styled from "styled-components";
import image1 from "./img/bg.png";

function App() {
  return (
    <Contentbox>
      <Title>Hello Fashionists!</Title>
      <img src={image1} width="360px" alt="" />
    </Contentbox>
  );
}

export default App;

const Contentbox = styled.div`
  width: 360px;
  display: block;
  position: relative;
  margin: 0 auto;
  background-color: #9e9d9d;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: palevioletred;
`;
