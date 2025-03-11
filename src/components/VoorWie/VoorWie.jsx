import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import PDFPopup from '../PDFPopup/PDFPopup';
import wie from '../../assets/img/info/wie.jpg';
import boekskepdf from '../../assets/files/Boekske_23-24_Sem1.pdf';
import statuutpdf from '../../assets/files/Statuten-HSC-Salmonella.pdf';

const Container = styled.div`
  background-color: rgb(40, 40, 40);

  color: white;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  padding-bottom: 30px;
  @media (min-height: 768px) {
    height: 100vh;
  }
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const Section = styled.div`
  margin-top: 90px; /* Adjust this value according to the height of your navbar */

  width: 80%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  @media (max-height: 768px) {
    margin-top: 5%; /* Adjust this value according to the height of your navbar for larger screens */
    
  }
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const LeftSection = styled.div`
  max-width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: auto;
  padding-bottom: auto;
  gap: 100px;
`;

const RightSection = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 50px;
`;

const VoorWie2 = styled.div``;

const Richtingen = styled.div`
  display: flex;
  gap: 50px;
  text-align: center;
`;

const Image = styled.img`
  
  width: 450px;
    height: 320px;
  
  justify-content: center;
  align-items: center;
  display: flex;
  @media (min-width: 768px) {
    width: 550px;
    height: 420px;
  }
`;

const Titel1 = styled.h2`
  color: #366636;
  font-size: 40px;
  padding-bottom: 10px;
`;

const Text1 = styled.p``;

const RichtingTitel = styled.h2`
  color: #6b047f;
  font-size: 40px;
`;

const Faculteit = styled.div``;

const Richting = styled.h3`
  color: gray;
  font-size: 20px;
`;

const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  gap: 30px;
  padding-bottom: 80px;
`;

const A = styled.a`
  flex-grow: 1;
  background-color: #366636;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: forestgreen;
  }
`;

function VoorWie() {
  const handleStatuutButtonClick = () => {
    window.open('../../assets/files/Statuten-HSC-Salmonella.pdf', '_blank');
  };

  const handleBoekskeButtonClick = () => {
    window.open('../../assets/files/Boekske_22-23_Sem1.pdf', '_blank');
  };

  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <Section>
        <UpperSection>
          <LeftSection>
            <VoorWie2>
              <Titel1>Voor Wie?</Titel1>
              <Text1>
                Wij zijn gebonden aan de Hogeschool Gent en dit in het bijzonder aan de departementen
                "Biowetenschappen en Industriële Technologie (DBT)", "Bedrijf en Organisatie (DBO)" &
                "IT en Digitale Innovatie (DIT)".
              </Text1>
            </VoorWie2>
            <Richtingen>
              <Faculteit>
                <RichtingTitel>DBT</RichtingTitel>
                <Richting>Chemie</Richting>
                <Richting>Elektromechanica</Richting>
                <Richting>Houttechnologie</Richting>
                <Richting>Modetechnologie</Richting>
                <Richting>Textieltechnologie</Richting>
                <Richting>Vastgoed</Richting>
              </Faculteit>
              <Faculteit>
                <RichtingTitel>DBO</RichtingTitel>
                <Richting>Organisatie & Management</Richting>
                <Richting>Retailmanagement</Richting>
              </Faculteit>
              <Faculteit>
                <RichtingTitel>DIT</RichtingTitel>
                <Richting>Toegepaste Informatica</Richting>
              </Faculteit>
            </Richtingen>
          </LeftSection>
          <RightSection>
            <Image src={wie} alt="groepsfoto" />
          </RightSection>
        </UpperSection>
        <ButtonSection>
          <A href={statuutpdf} without rel="noopener noreferrer" target="_blank">
            Statuten
          </A>
          <A href={boekskepdf} without rel="noopener noreferrer" target="_blank">
            SemesterBoekske
          </A>
        </ButtonSection>
      </Section>
    </Container>
  );
}

export default VoorWie;
