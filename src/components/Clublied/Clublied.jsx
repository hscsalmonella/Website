import React from 'react';
import styled from 'styled-components';
import CESAR from '../../assets/img/info/clublied.jpg';
import lijn from '../../assets/img/line.png';

const Container = styled.div`
  background-color: rgb(40, 40, 40);
  margin-top: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  color: white;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  @media (min-height: 768px) {
    height: 80vh;
  }
`;

const Section = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ClubliedSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
  gap: 250px;
`;

const BevriendeClubsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Rechts = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 400px;
`;

const ClubliedTitel = styled.div`
  text-align: center;
  font-size: 35px;
  color: #366636;
  padding-bottom: 10px;
`;

const ClubliedContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const ClubliedText = styled.div`
  font-size: 20px;
`;

const Image = styled.img`
  height: 430px;
`;

const Line = styled.img`
  height: 2px;
  width: 80%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Title = styled.div`
  color: #366636;
  font-size: 30px;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-left: 30px;
  gap: 40px;
`;

const Button = styled.a`
  background-color: purple;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
  padding: 10px 20px;
  transition: background-color 0.4s ease;
  cursor: pointer;
  flex: 1;

  &:hover {
    background-color: #366636;
  }
`;

function Clublied() {
  return (
    <Container>
      <Section>
        <Line src={lijn} />
        <ClubliedSection>
          <Links>
            <ImageContainer>
              <Image src={CESAR} />
            </ImageContainer>
          </Links>
          <Rechts>
            <ClubliedContainer>
              <ClubliedTitel>Clublied</ClubliedTitel>
              <ClubliedText>
              1. Salmonella is een club van kameraden<br />
                  Van weinig woorden en veel daden<br />
                  We gaan soms naar de les<br />
                  Maar hangen liever aan de fles<br />
                  Een vatteke valt voor ons niet te versmaden. <br /> <br />

                  Refrein:<br />
                  Eh retteketek jeneivelklet<br />
                  We zijn weer op de zwier<br />
                  Dan gaan we met z'n allen heen<br />
                  En maken veel plezier.<br /> <br />

                  2. Uit Vlaanderen komen al ons leden<br />
                  Uit vele dorpen en veel steden<br />
                  Studeren wij in Gent<br />
                  Voor een heel klein percent<br />
                  De rest van onze tijd is amuseren.<br />
              </ClubliedText>
            </ClubliedContainer>
          </Rechts>
        </ClubliedSection>
        <Line src={lijn} />
        <BevriendeClubsSection>
          <Title>Bevriende Clubs</Title>
          <LinksContainer>
            <Button href="https://vetogent.fkgent.be/" target="_blank" rel="noopener noreferrer">
              Veto
            </Button>
            <Button href="https://www.westlandia-gent.be" target="_blank" rel="noopener noreferrer">
              Westlandia
            </Button>
            <Button href="https://www.curatiogent.be" target="_blank" rel="noopener noreferrer">
              HSC Curatio
            </Button>
          </LinksContainer>
        </BevriendeClubsSection>
      </Section>
    </Container>
  );
}

export default Clublied;
