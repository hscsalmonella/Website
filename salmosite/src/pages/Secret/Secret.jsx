import React from 'react'
import Secretfile from '../../components/Secretfile/Secretfile'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    &::-webkit-scrollbar{
        display: none;
      }
`

function Secret() {
    return (
        <Container>
            <Secretfile/>
        </Container>
      )
}

export default Secret