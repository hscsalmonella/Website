import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from '../../components/Popup/Popup';
import logo from '../../assets/img/schild.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background-color: rgb(40, 40, 40);
  margin-top: 20px;
  border-radius: 20px;
  color: white;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-height: 768px) {
    height: 100vh;
  }
`;

const LogoImage = styled.img`
  width: 500px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 20px;
`;

const SchildContainer = styled.div`
  position: relative;
`;

const SchildContainerButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: purple;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 6px solid rgba(128, 128, 128, 01);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.6);
  }
`;

const QuestionMark = styled.span`
  font-size: 30px;
  line-height: 1;
`;



const Titel = styled.h1`
  padding-bottom: 20px;
  font-size: 50px;
`;

function Schild() {
  const [popupBoven, setPopupBoven] = useState(false);
  const [popupLinks, setPopupLinks] = useState(false);
  const [popupRechtsBoven, setPopupRechtsBoven] = useState(false);
  const [popupRechtsOnder, setPopupRechtsOnder] = useState(false);

  return (
    <Container>
      <Titel>Het Schild</Titel>
      <SchildContainer>
        <LogoImage src={logo} alt="schild" />
        <SchildContainerButton
          style={{ top: '5%', left: '47%' }}
          onClick={() => setPopupBoven(true)}
        >
          <QuestionMark>?</QuestionMark>
        </SchildContainerButton>
        <SchildContainerButton
          style={{ top: '50%', left: '22%' }}
          onClick={() => setPopupLinks(true)}
        >
          <QuestionMark>?</QuestionMark>
        </SchildContainerButton>
        <SchildContainerButton
          style={{ top: '35%', left: '72%' }}
          onClick={() => setPopupRechtsBoven(true)}
        >
          <QuestionMark>?</QuestionMark>
        </SchildContainerButton>
        <SchildContainerButton
          style={{ top: '75%', left: '72%' }}
          onClick={() => setPopupRechtsOnder(true)}
        >
          <QuestionMark>?</QuestionMark>
        </SchildContainerButton>
      </SchildContainer>

      <Popup trigger={popupBoven} setTrigger={setPopupBoven}>
        <h3>Bovenkant:</h3>
        <p>Hier staat in sierletters de naam van de club: Salmonella</p>
      </Popup>
      <Popup trigger={popupLinks} setTrigger={setPopupLinks}>
        <h3>Linkerkant:</h3>
        <p>
          Op de achtergrond staan, verticaal naast elkaar, afwisselend onze
          clubkleuren: groen en paars. Daarboven staat het monogram van onze
          club. Dit is een sierlijke "S" met 7 krullen eraan. Dit verwijst
          naar de 7 verdiepingen van home Vesalius, waar we destijds
          opgericht zijn.
        </p>
      </Popup>
      <Popup trigger={popupRechtsBoven} setTrigger={setPopupRechtsBoven}>
        <h3>Rechterbovenkant:</h3>
        <p>
          De Vlaamse Leeuw, op gele achtergrond. En dit omdat we een Vlaamse
          studentenclub zijn. (Dit heeft echter niets met politieke meningen
          te maken!)
        </p>
      </Popup>
      <Popup trigger={popupRechtsOnder} setTrigger={setPopupRechtsOnder}>
        <h3>Rechteronderkant:</h3>
        <p>Onze mascotte: Salmy</p>
      </Popup>
    </Container>
  );
}

export default Schild;
