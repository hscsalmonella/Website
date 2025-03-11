import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Tile from '../Tile/Tile'


import logoCuba from '../../assets/img/sponsor/LogoCuba.png'
import logoZone from '../../assets/img/sponsor/TheZone.png'
import logoDeli from '../../assets/img/sponsor/deli.jpg'

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
    scroll-snap-align: center;

`

function SponsorLine1() {
  return (
    <Container>
        <Navbar />
        <Section>
        <div className='cuba'>
            <Tile logo={logoCuba}
                  deals='Prepaid drinkcard voor €1,50'
                  url='https://www.facebook.com/cubagent/'
            />
          </div>
          <div className='zone'>
            <Tile logo={logoZone}
                  deals='
                  één meter: bier/rodenbach €22/€27, sterke+fris: €7,
                  vatprijs: €295 bier / €185 Rodenbach'
                  url='https://www.thezone.be/'
            />
          </div>
          <div className='deli'>
            <Tile logo={logoDeli}
                  deals='4+1 gratis flessen spitbull'
                  url='https://www.facebook.com/deliriumoverpoort'
            />
          </div>
        </Section>
        
        
    </Container>
  )
}

export default SponsorLine1