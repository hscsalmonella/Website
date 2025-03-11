import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import SponsorTiles from '../SponsorTiles/SponsorTiles'
import Footer from '../Footer/Footer'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

`

const Section = styled.div`
    height: 100%;

`
function SponsorSection() {
  return (
    <Container>
        <Navbar />
        <Section>
            <SponsorTiles />
        </Section>
    </Container>
  )
}

export default SponsorSection