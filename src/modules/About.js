import styled from "styled-components/macro";
import backgroundimage from "../img/lookbook.jpg";

export default function About() {
  return (
    <ContentBox data-testid="aboutscreen">
      <AboutContent>
        <h2>What ?</h2>
        <TextBlock>
          Diese App sagt Dir jeden Tag, was Du anziehen kannst.
        </TextBlock>
        <h2>How ?</h2>
        <TextBlock>
          Wähle auf dem Homescreen die nächste Große Stadt in Deiner Nähe. Die
          App gibt Dir Vorschläge, welche Kleidungsstücke zum Wetter passen
          könnten.
        </TextBlock>
        <h2>Who ?</h2>
        <TextBlock>
          Diese App ist meine Abschlussarbeit bei neuefische.de. Viele Spaß
          damit!
        </TextBlock>
        <TextBlock>Oliver Starckjohann</TextBlock>
      </AboutContent>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  text-align: center;
  background-image: url(${backgroundimage});
  background-size: contain;
  opacity: 40%;
`;

const AboutContent = styled.section`
  width: calc(100% - 4rem);
  display: block;
  position: relative;
  top: 80px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  background-color: rgba(192,192,192,0.90);
  color: rgba(0,0,0,1);
  border-radius: 10px;
  border: 6px solid #ffffff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.75);
}
`;

const TextBlock = styled.p`
  display: block;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000000;
`;
