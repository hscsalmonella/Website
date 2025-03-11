import React from 'react'
import styled from 'styled-components'
import MobileNavbar from '../../Mobile-Components/navbar/MobileNavbar'
import Kalender from '../../components/FullKalender/FullKalender'
import Footer from '../../Mobile-Components/Footer/Footer'

const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
`
const KalenderSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KalenderContent = styled.div`
  width: 96%;
  color: white;
  height: 40%;
`;

const Link = styled.p`
  color: white;
  padding-top: 10px;
`

function MobileKalender() {
  return (
    <Container>
      <MobileNavbar />
      <KalenderSection>
        <KalenderContent>
          <Kalender />
          <Link>Onze kalender toevogen aan jouw eigen kalender? Klik op deze <a href='https://calendar.google.com/calendar/u/0?cid=Z21kYmQxY2YzbDh0NzE0OWM5cTJidmw3MzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ' target='_blank'> link</a>.</Link>
     
        </KalenderContent>
        
      </KalenderSection>
       <Footer />
    </Container>
  );
}


export default MobileKalender;
