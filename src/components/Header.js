import styled from "styled-components/macro";

export default function Header() {
  return (
    <HeaderContainer>
      <Headertitle>What to dress today?</Headertitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 340px;
  top: 2px;
  background-color: #545353;
  border-radius: 10px;
  z-index: 10;
  opacity: 90%;
`;

const Headertitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4em;
  color: #eeecec;
  border-radius: 10px;
  margin-top: 20px;
`;
