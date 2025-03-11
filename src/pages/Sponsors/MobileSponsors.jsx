import React from 'react';
import styled from 'styled-components';
import MobileNavbar from '../../Mobile-Components/navbar/MobileNavbar';
import Tile from '../../components/Tile/Tile';

import logoCuba from '../../assets/img/sponsor/LogoCuba.png';
import logoZone from '../../assets/img/sponsor/TheZone.png';
import logoDeli from '../../assets/img/sponsor/deli.jpg';
import logoSprite from '../../assets/img/sponsor/Sprite.png';
import logobosma from '../../assets/img/sponsor/bosma.jpg';
import logoFuzeTea from '../../assets/img/sponsor/Fuzetea.jpg';
import logoStefanos from '../../assets/img/sponsor/logoStefanos.png'

import logoStudant from '../../assets/img/sponsor/studant.jpg';
import logoKnaek from '../../assets/img/sponsor/Knaek.png';

import logoLaBicy from '../../assets/img/sponsor/Bicyclette.png';
import Footer from '../../Mobile-Components/Footer/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(33, 33, 33);
`;

const SponsorContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 50px;
  flex: 1;
`;

const FooterContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
`;




function MobileSponsor() {
  return (
    <Container>
      <MobileNavbar />
      <SponsorContainer>
        <Tile
          logo={logoCuba}
          deals="Prepaid drinkcard voor €1,60"
          url="https://www.facebook.com/cubagent/"
        />
        <Tile
          logo={logoZone}
          deals="één meter: bier/rodenbach €22/€27, sterke+fris: €7, vatprijs: €295 bier / €185 Rodenbach"
          url="https://www.thezone.be/"
        />
        <Tile
          logo={logoDeli}
          deals="4+1 gratis flessen spitbull"
          url="https://www.facebook.com/deliriumoverpoort"
        />
        <Tile
          logo={logobosma}
          deals=""
          url="https://www.ekart.be/nl"
        />
        <Tile
          logo={logoFuzeTea}
          deals=""
          url="https://nl.coca-cola.be/onze-merken-en-verhalen/fuze-tea"
        />
        <Tile
          logo={logoSprite}
          deals=""
          url="https://www.coca-cola.com/be/nl/brands/sprite"
        />
        <Tile
          logo={logoStudant}
          deals=""
          url="https://www.studant.be/"
        />
        <Tile
          logo={logoKnaek}
          deals="App met verschillende deals."
          url="https://www.knaek.be/"
        />
        <Tile
          logo={logoLaBicy}
          deals="Gratis drankje bij aankoop van een pasta."
          url="https://labicyclettepastabar.be/"
        />
        <Tile
          logo={logoStefanos}
          url="https://www.facebook.com/p/Stefanos-Place-100063656286660/"
        />
      </SponsorContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}

export default MobileSponsor;
