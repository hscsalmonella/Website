import React from 'react'
import styled from 'styled-components'
import MobileNavbar from '../../Mobile-Components/navbar/MobileNavbar'
import Home from '../../Mobile-Components/home/home'
import Footer from '../../Mobile-Components/Footer/Footer'

const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
`



function MobileHome() {
  return (
    <Container>
        <MobileNavbar/>
        <Home />
        <Footer />
</Container>
  )
}

export default MobileHome