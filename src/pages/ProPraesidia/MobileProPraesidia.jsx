import React from 'react'
import styled from 'styled-components'
import MobileNavbar from '../../Mobile-Components/navbar/MobileNavbar'
import ProTable from '../../components/ProTable/Protable'
import Footer from '../../Mobile-Components/Footer/Footer'
const Container = styled.div`
  height: 100vh;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Section = styled.div`
padding: 20px;
padding-bottom: 110px;
padding-top: 30px;
`


function MobileProPraesidia() {
  return (
    <Container>
        <MobileNavbar />
        <Section>
            
        <ProTable />
        </Section>
        
        <Footer/>
    
</Container>
  )
}

export default MobileProPraesidia