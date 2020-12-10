import styled from "styled-components/macro";
import DressListItem from "../components/DressListItem";
import uuid from "react-uuid";

export default function Dresses(props) {
  return (
    <ContentBox>
      <DressConditions data-testid="dressconditions" key={uuid()}>
        {props.city}, {props.temp} Grad, {props.conditions}
        <br />
        Das kannst Du heute gut anziehen:
      </DressConditions>

      <ul data-testid="dresslist">
        {props.dresses.map((dress) => (
          <DressListItem key={uuid()} dress={dress} />
        ))}
      </ul>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 0px;
  text-align: center;
`;

const DressConditions = styled.section`
  height: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0.6em;
`;
