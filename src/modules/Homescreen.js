import styled from "styled-components/macro";

export default function Homescreen({ citySelection, pageNavigation }) {
  function selectandNavigate(city) {
    citySelection(city);
    pageNavigation("dress");
  }

  return (
    <Contentbox>
      <Citiesmenu data-testid="homescreen">
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
  top: 60px;
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
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  padding: 0.8em 1.75rem;
  background: white;
  border: 1px solid black;
  color: black;
  border: none;
  border-radius: 4px;
  margin-bottom: 1.75rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`;
