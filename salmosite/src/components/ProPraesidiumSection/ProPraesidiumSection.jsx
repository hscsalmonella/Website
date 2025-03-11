import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Protable from '../ProTable/Protable'

const Container = styled.div`

color: white;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center

@media (min-height: 768px) {
  height: 100vh;
}

`

const Section = styled.div`
height: 100%;
scroll-snap-align: center;
justify-content: space-between;
flex-grow: 0;
padding-bottom: 60px;
`

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;


function ProPraesidiaSection() {
  return (
    <Container>
      <NavbarContainer><Navbar /></NavbarContainer>
    <Navbar />
    <Section>
      <Protable/>
    </Section>
</Container>
  )
}

export default ProPraesidiaSection