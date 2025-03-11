import React from 'react'
import VoorWie from '../../components/VoorWie/VoorWie'
import styled from 'styled-components'
import PraesesWoord from '../../components/PraesesWoord/PraesesWoord';
import BevriendeClubs from '../../components/BevriendeClubs/BevriendeClubs';
import Clublied from '../../components/Clublied/Clublied';
import Schild from '../../components/Schild/Schild';
import Footer from '../../components/Footer/Footer';


const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
      background-color: rgb(33, 33, 33);
      color: white;
      scroll-snap-type: y mandatory;

`



function Info() {
  return (
    <Container>
      <VoorWie/>
      <PraesesWoord />
        <Clublied/>
        <Schild />
        <Footer />
    </Container>
  )
}

export default Info