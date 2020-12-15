import styled from "styled-components/macro";
import Switch from "../components/Switch";

export default function Settings({ gender, handleChangeGender }) {
  
  

  return (
    <ContentBox data-testid="settingsscreen">
      <SettingsLabel>Kleiderschränke</SettingsLabel>
      <SettingsContent>
        <LabelContainer>
          <WomenLabel>Frauen</WomenLabel>
          <MenLabel>Männer</MenLabel>
        </LabelContainer>
        <Switch gender={gender} handleChangeGender={handleChangeGender}  />
      </SettingsContent>
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
  top: 60px;
`;

const SettingsContent = styled.section`
  height: 60%;
  padding: 0.7em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
`;

const LabelContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

const SettingsLabel = styled.p`
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: rgba(34, 34, 34, 0.96);
  margin-top: 3em;
`;

const WomenLabel = styled.p`
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: rgba(120, 120, 120, 0.96);
  margin-right: 0;
`;

const MenLabel = styled.p`
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: rgba(34, 34, 34, 0.96);
  margin-left: 0.8em;
`;
