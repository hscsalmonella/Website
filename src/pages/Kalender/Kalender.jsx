import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components';
import FullKalenderSection from '../../components/FullKalenderSection/FullKalenderSection'
import Footer from '../../components/Footer/Footer';

const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
      background-color: rgb(33, 33, 33);
      color: white;
`
const Link = styled.a`

  text-align: center;
`



function Kalender() {
  return (
    <Container>
        <FullKalenderSection />
        <Footer />
    </Container>
  )
}

export default Kalender