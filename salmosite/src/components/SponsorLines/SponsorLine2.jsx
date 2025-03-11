import React from 'react'
import styled from 'styled-components'
import Tile from '../Tile/Tile'

import logoSprite from '../../assets/img/sponsor/Sprite.png'
import logoStudant from '../../assets/img/sponsor/studant.jpg'
import logoFuzeTea from '../../assets/img/sponsor/Fuzetea.jpg'


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

function SponsorLine2() {
  return (
    <Container>
        <Section>
             <div className='fuze'>
            <Tile logo={logoFuzeTea}
                  deals=''
                  url='https://nl.coca-cola.be/onze-merken-en-verhalen/fuze-tea'
            />
          </div>
          <div className='sprite'>
            <Tile logo={logoSprite}
                  deals=''
                  url='https://www.coca-cola.com/be/nl/brands/sprite'
            />
          </div>
          <div className='studant'>
            <Tile logo={logoStudant}
                  deals=''
                  url='https://www.studant.be/'
            />
          </div>

        </Section>
       
    </Container>
  )
}

export default SponsorLine2