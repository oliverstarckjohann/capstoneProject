import styled from "styled-components/macro";
import homeicon from "../img/home_w.png";
import abouticon from "../img/about_w.png";

export default function Navigation({ onNavigate }) {
  return (
    <NavigationContainer>
      <Navigationlist>
        <NavigationItem
          data-testid="homebutton"
          onClick={(event) => onNavigate("home")}
        >
          <img src={homeicon} alt="home" />
        </NavigationItem>
        <NavigationItem
          data-testid="aboutbutton"
          onClick={(event) => onNavigate("about")}
        >
          <img src={abouticon} alt="about" />
        </NavigationItem>
      </Navigationlist>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  position: fixed;
  height: 60px;
  width: 100%;
  bottom: 0;
  background-color: rgba(34, 34, 34, 0.96);
  z-index: 10;
  opacity: 90%;
`;

const Navigationlist = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavigationItem = styled.li`
  display: block;
  height: 20px;
  padding: 2px;
  color: #eeecec;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  list-style: none;
`;
