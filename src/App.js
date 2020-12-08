import { useEffect, useState } from "react";
import fetchData from "./services/fetchData";
import styled from "styled-components/macro";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Navigation from "./components/Menu";
import Homescreen from "./modules/Homescreen";
import Dresses from "./modules/Dresses";
import About from "./modules/About";

function App() {
  //ConditionState
  const [conditions, setConditions] = useState([
    {
      city: "Hamburg",
      description: "Waiting for data...",
      temp: "42",
      dresscode: "42",
    },
  ]);
  //DressesState
  const [dresses, setAllDresses] = useState([]);
  //cityState
  const [selectedcity, setselectedCity] = useState("Hamburg");
  //NavigationState
  const [currentpage, setCurrentPage] = useState("home");

  //update conditionState initial
  useEffect(() => {
    fetchData("json_request_conditions.php")
      .then((data) => setConditions([...data]))
      .catch((error) => console.log(error));
  }, []);

  //update dressState initial
  useEffect(() => {
    fetchData("json_request_dress.php")
      .then((data) => setAllDresses([...data]))
      .catch((error) => console.log(error));
  }, []);

  //User-Selected City from Homescreen
  let GetDataForMyCity = conditions.find((condition) => {
    return condition.city === selectedcity;
  });

  //Selected Dresses for the Conditions in the location (dresscode)
  const filteredDresses = dresses.filter(
    (dresses) => dresses.dresscode === GetDataForMyCity?.dresscode
  );

  //Render the page-Content, selected in the Navigation
  function Contentswitch(currentpage) {
    switch (currentpage) {
      case "home":
        return (
          <Homescreen
            citySelection={setselectedCity}
            pageNavigation={setCurrentPage}
          />
        );
      case "dress":
        return (
          <Dresses
            city={selectedcity}
            temp={GetDataForMyCity?.temp}
            conditions={GetDataForMyCity?.description}
            dresscode={GetDataForMyCity?.dresscode}
            dresses={filteredDresses}
          />
        );
      case "about":
        return <About />;
      default:
        return (
          <Homescreen
            citySelection={setselectedCity}
            pageNavigation={setCurrentPage}
          />
        );
    }
  }

  //The return value of the app => rendering content
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
  width: 100%;
  display: block;
  padding: 0px;
  text-align: center;
`;
