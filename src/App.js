import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import GlobalStyle, { createGlobalStyle } from "./components/GlobalStyle";
import image1 from "./img/bg.png";
import Header from "./components/Header";
import Navigation from "./components/Menu";
import Homescreen from "./modules/Homescreen";
import getConditions from "./components/Getcontitions";

function App() {
  const [condition, setCondition] = useState({});
  //update State initial
  useEffect(() => {
    getConditions()
      //set the keys text and date in the Object of the state
      .then((data) =>
        setCondition({
          condition: data[0].condition,
          temp: data[0].temp,
          dresscode: data[0].dresscode,
          location: data[0].city,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  //update State on Click
  function updateCondition() {
    getConditions()
      .then((data) =>
        setCondition({
          condition: data[1].condition,
          temp: data[1].temp,
          dresscode: data[1].dresscode,
          location: data[1].city,
        })
      )
      .catch((error) => console.log(error));
  }

  console.table(condition);

  return (
    <Contentbody>
      <GlobalStyle />
      <Header />
      <Homescreen />
      <Navigation />
    </Contentbody>
  );
}

export default App;

const Contentbody = styled.div`
  width: 340px;
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 0px;
  text-align: center;
  background-image: url(${image1});
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: palevioletred;
`;
