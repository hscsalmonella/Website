import React from 'react';
import Tile from '../Tile/Tile';
import styled from 'styled-components';

import logoCuba from '../../assets/img/sponsor/LogoCuba.png';
import logoZone from '../../assets/img/sponsor/TheZone.png';
import logoDeli from '../../assets/img/sponsor/deli.jpg';
import logoPeterman from '../../assets/img/sponsor/PetermanLogo-475x256.png';
import logoStudant from '../../assets/img/sponsor/studant.jpg';
import logoLaBicy from '../../assets/img/sponsor/Bicyclette.png';
import logoKnaek from '../../assets/img/sponsor/Knaek.png';
import logoWeFynd from '../../assets/img/sponsor/wefund.png';
import logoEKart from '../../assets/img/sponsor/eKart-Logo-onblack.jpg';
import logoNootNoot from '../../assets/img/sponsor/nootnoot.jpg';
import logoGoldenS from '../../assets/img/sponsor/scisors.jpg';
import logoWokYu from '../../assets/img/sponsor/Wokyu.jpg';
import logoCegeka from '../../assets/img/sponsor/cegeka.png';
import logoFuzeTea from '../../assets/img/sponsor/Fuzetea.jpg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding-top: 1rem;
  background-color: rgb(33, 33, 33);
`;

function SponsorTiles() {
  return (
    <Container>
      <Tile
        logo={logoCuba}
        deals="Prepaid drinkcard voor €1,50"
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
        logo={logoFuzeTea}
        deals=""
        url="https://nl.coca-cola.be/onze-merken-en-verhalen/fuze-tea"
      />
      <Tile
        logo={logoWeFynd}
        deals=""
        url="https://www.wefynd.com/nl"
      />
      <Tile
        logo={logoEKart}
        deals="2 + 1 race gratis."
        url="https://www.ekart.be/nl"
      />
      <Tile
        logo={logoNootNoot}
        deals=""
        url="https://www.noot-noot.be/"
      />
      <Tile
        logo={logoWokYu}
        deals="20% korting bij afhalen."
        url="https://www.wokyu.be/"
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
        logo={logoCegeka}
        deals=""
        url="https://www.cegeka.com/en/be/"
      />
      <Tile
        logo={logoGoldenS}
        deals="10% korting op bezoek"
        url="https://www.facebook.com/GoldenScissorsGCV"
      />
      <Tile
        logo={logoLaBicy}
        deals="Gratis drankje bij aankoop van een pasta."
        url="https://labicyclettepastabar.be/"
      />
    </Container>
  );
}

export default SponsorTiles;
