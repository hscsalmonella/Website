import React from 'react'
import styled from 'styled-components'
import Tile from '../Tile/Tile'

import logoLaBicy from '../../assets/img/sponsor/Bicyclette.png';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(33, 33, 33);
    scroll-snap-align: center;

`

const Section = styled.div`
    height: 100%;
    postion: relative;
    width: 90%;
    align-items: center;
    justify-content: center;
    display: flex;


`
function SponsorLine5() {
  return (
    <Container>
        <Section>
        <div className='labicy'>
            <Tile logo={logoLaBicy}
                  deals='Gratis drankje bij aankoop van een pasta.'
                  url='https://labicyclettepastabar.be/'
            />
          </div>
        </Section>
    </Container>
  )
}

export default SponsorLine5