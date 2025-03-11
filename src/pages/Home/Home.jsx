import React from 'react'
import styled from 'styled-components'
import Album from '../../components/Album/Album'
import GentBeeft from '../../components/GentBeeft/GentBeeft'
import Footer from '../../components/Footer/Footer'

const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
`



function Home() {
  return (
    <Container>
        <Album />
        <GentBeeft/>
        <Footer />
    </Container>
  )
}

export default Home