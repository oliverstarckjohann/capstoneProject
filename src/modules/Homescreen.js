import styled from "styled-components/macro";
import image1 from "../img/bg01.png";

export default function Homescreen({ citySelection, pageNavigation }) {
  function selectandNavigate(city) {
    citySelection(city);
    pageNavigation("dress");
  }

  return (
    <Contentbox>
      <Citiesmenu data-testid="homescreen">
        >
        <ButtonStyled onClick={(event) => selectandNavigate("Berlin")}>
          Berlin
        </ButtonStyled>
        <ButtonStyled onClick={(event) => selectandNavigate("Hamburg")}>
          Hamburg
        </ButtonStyled>
        <ButtonStyled onClick={(event) => selectandNavigate("Muenchen")}>
          München
        </ButtonStyled>
        <ButtonStyled onClick={(event) => selectandNavigate("Koeln")}>
          Köln
        </ButtonStyled>
      </Citiesmenu>
    </Contentbox>
  );
}

const Contentbox = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 100vh;
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
  box-shadow: 10px 10px 5px grey;
`;
