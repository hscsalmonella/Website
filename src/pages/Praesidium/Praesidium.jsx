import React from 'react'
import PraesidiumSection from '../../components/PraesidiumSection/PraesidiumSection'
import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'

const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
      background-color: rgb(33, 33, 33);
`

function Praesidium() {
  return (
    <Container>
        <PraesidiumSection/>
        <Footer />
    </Container>
  )
}

export default Praesidium