import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Tile from '../../components/Tile/Tile'
import styled from 'styled-components';

import SponsorSection from '../../components/SponsorSection/SponsorSection'
import Footer from '../../components/Footer/Footer'
import SponsorLine1 from '../../components/SponsorLines/SponsorLine1';
import SponsorLine2 from '../../components/SponsorLines/SponsorLine2';
import SponsorLine3 from '../../components/SponsorLines/SponsorLine3';
import SponsorLine4 from '../../components/SponsorLines/SponsorLine4';
import SponsorLine5 from '../../components/SponsorLines/SponsorLine5';

const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
      background-color: rgb(33, 33, 33);
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      overflow-y: auto;
      scrollbar-width: none;
`



export default function Sponsors() {

  return (
  <Container>
      <SponsorLine1 />
      <SponsorLine2 />
      <SponsorLine3 />
      <SponsorLine4/>
      <Footer />
    </Container>
  )
}
