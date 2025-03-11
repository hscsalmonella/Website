import React from 'react'
import styled from 'styled-components'
import Tile from '../Tile/Tile'

import logoNootNoot from '../../assets/img/sponsor/Knaek.png'
import logoLaBicy from '../../assets/img/sponsor/Bicyclette.png';
import logobosma from '../../assets/img/sponsor/bosma.jpg'

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
function SponsorLine3() {
  return (
    <Container>
        <Section>
        <div className='knaek'>
            <Tile logo={logoNootNoot}
                  deals=''
                  url='https://www.knaek.be/'
            />
          </div>

          <div className='Labyci'>
            <Tile logo={logoLaBicy}
                  deals='Gratis drankje bij aankoop van een pasta.'
                  url='https://labicyclettepastabar.be/'
            />
          </div>

          <div className='bosma'>
            <Tile logo={logobosma}
                  deals=''
                  url='https://allesbinder.be/'
            />
          </div>
        </Section>
    </Container>
  )
}

export default SponsorLine3