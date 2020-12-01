import styled from "styled-components/macro";
import homeicon from "../img/home_w.png";
import abouticon from "../img/about_w.png";

export default function Navigation({ onNavigate }) {
  return (
    <NavigationContainer>
      <Navigationitem onClick={(event) => onNavigate("home")}>
        <img src={homeicon} alt="home" />
      </Navigationitem>
      <Navigationitem onClick={(event) => onNavigate("dress")}>
        <img src={abouticon} alt="about" />
      </Navigationitem>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
  width: 340px;
  bottom: 2px;
  background-color: #545353;
  border-radius: 10px;
  z-index: 10;
  opacity: 90%;
`;

const Navigationitem = styled.div`
  display: block;
  height: 20px;
  background-color: #545353;
  padding: 2px;
  color: #eeecec;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
