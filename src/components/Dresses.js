import styled from "styled-components/macro";
import image1 from "../img/bg01.png";

export default function Dresses(props) {
  return (
    <Contentbox>
      <Conditions data-testid="dressconditions">
        {props.city}, {props.temp} Grad, {props.conditions}
      </Conditions>
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

const Conditions = styled.section`
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
