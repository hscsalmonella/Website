import React from 'react'
import styled from 'styled-components'
import Tile from '../Tile/Tile'

import logoCegeka from '../../assets/img/sponsor/cegeka.png'
import logoStefanos from '../../assets/img/sponsor/logoStefanos.png'
import logoGoldenS from '../../assets/img/sponsor/scisors.jpg'



const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(33, 33, 33);
    

`

const Section = styled.div`
    height: 100%;
    scroll-snap-align: center;
    postion: relative;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`

function SponsorLine4() {
  return (
    <Container>
        <Section>
        <div className='Stefanos'>
            <Tile logo={logoStefanos}
                  url='https://www.facebook.com/profile.php?id=100063656286660&ref=page_internal&mt_nav=1&paipv=0&eav=AfYa0HQJXa4UDReWGF1V6XR4iZjR5lQy04DWiwCTgzLqUM6M1MrEgVW-W6CXQENKnB4'
            />
          </div>
      
        </Section>
    </Container>
  )
}

export default SponsorLine4