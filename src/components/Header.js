import styled from "styled-components/macro";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>What to dress today?</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  background-color: rgba(34, 34, 34, 0.96);
  z-index: 10;
  opacity: 90%;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 1rem;
  font-weight: 900;
  color: white;
  letter-spacing: 2px;
  border-radius: 10px;
  text-transform: uppercase;
  line-height: 60px;
`;
