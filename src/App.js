import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Navigation from "./components/Menu";
import Homescreen from "./modules/Homescreen";
import Dresses from "./modules/Dresses";
import About from "./modules/About";
import getConditions from "./components/Getconditions";
import getDresses from "./components/Getdresses";

function App() {
  //navigationState
  const [currentpage, setCurrentPage] = useState("home");
  //conditionState
  const [condition, setCondition] = useState([]);
  //dressState
  const [dresses, setDresses] = useState([]);
  //cityState
  const [city, setCity] = useState("");

  //update dressState initial
  useEffect(() => {
    getDresses()
      //set the keys text and date in the Object of the state
      .then((data) => setDresses([...data]))
      .catch((error) => console.log(error));
  }, []);

  //update conditionState initial
  useEffect(() => {
    getConditions()
      //set the keys text and date in the Object of the state
      .then((data) => setCondition([...data]))
      .catch((error) => console.log(error));
  }, []);

  //console.table(condition);
  //console.table(dresses);
  console.log(city);

  function Contentswitch(currentpage) {
    if (currentpage == "home") {
      return <Homescreen citySelection={setCity} />;
    } else if (currentpage == "dress") {
      return <Dresses />;
    } else {
      return <About />;
    }
  }

  return (
    <Contentbody>
      <GlobalStyle />
      <Header />
      {Contentswitch(currentpage)}
      <Navigation onNavigate={setCurrentPage} />
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
`;

const Title = styled.h1`
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: palevioletred;
`;
