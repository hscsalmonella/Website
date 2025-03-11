import React from 'react'
import styled from 'styled-components'
import FullKalender from '../../components/FullKalender/FullKalender'
import Navbar from '../Navbar/Navbar'

const Container = styled.div`
color: white;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 80px;
padding-bottom: 60px;
@media (min-height: 900px) {
  height: 100vh;
  flex-direction: column;
justify-content: center;
align-items: center;
}

`

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;


const Section = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1000px;
padding-top: 2rem;
justify-content: space-between;
justify-content: center;
align-items: center;
padding-bottom: 60px;
text-align: center;
`
const Link = styled.a`
  width: 100%;
  padding-top: 10px;
  text-align: center;
`


function FullKalenderSection() {
  return (
    <Container>
      <NavbarContainer><Navbar /></NavbarContainer>
    
    <Section>
        <FullKalender />
        
    </Section>
    <Link>Onze kalender toevogen aan jouw eigen kalender? Dat kan! Klik hiervoor op deze <a href='https://calendar.google.com/calendar/u/0?cid=Z21kYmQxY2YzbDh0NzE0OWM5cTJidmw3MzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ' target='_blank'> link</a>.</Link>
</Container>
  )
}

export default FullKalenderSection