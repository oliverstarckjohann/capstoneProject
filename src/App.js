import { useEffect, useState } from "react";
import getConditions from "./components/Getconditions";
import getDresses from "./components/Getdresses";
import styled from "styled-components/macro";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Navigation from "./components/Menu";
import Homescreen from "./modules/Homescreen";
import Dresses from "./components/Dresses";
import About from "./modules/About";

function App() {
  //ConditionState
  const [conditions, setCondition] = useState([
    {
      city: "Hamburg",
      description: "Waiting for data...",
      temp: "42",
      dresscode: "42",
    },
  ]);
  //DressesState
  const [alldresses, setAllDresses] = useState([]);
  //cityState
  const [selectedcity, setselectedCity] = useState("Hamburg");
  //NavigationState
  const [currentpage, setCurrentPage] = useState("home");

  //update conditionState initial
  useEffect(() => {
    getConditions()
      //set the keys text and date in the Object of the state
      .then((data) => setCondition([...data]))
      .catch((error) => console.log(error));
  }, []);

  //update dressState initial
  useEffect(() => {
    getDresses()
      //set the Dresses and Dresscodes to the state
      .then((data) => setAllDresses([...data]))
      .catch((error) => console.log(error));
  }, []);

  let GetDataForMyCity = conditions.find((condition) => {
    return condition.city === selectedcity;
  });

  let ConditionsInCity = GetDataForMyCity.description;
  let TemperatureInCity = GetDataForMyCity.temp;

  function Contentswitch(currentpage) {
    if (currentpage === "home") {
      return <Homescreen citySelection={setselectedCity} />;
    } else if (currentpage === "dress") {
      return (
        <Dresses
          city={selectedcity}
          temp={TemperatureInCity}
          conditions={ConditionsInCity}
        />
      );
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
