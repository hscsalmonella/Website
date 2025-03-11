import React from 'react'
import styled from 'styled-components'
import "../Card/card.css"
import line from '../../assets/img/line.png'

const Container = styled.div`
    width: 240px;
    height: 240px;
    position: relative;
    &:hover .overlay{
      opacity: 1;
    }
    box-shadow: 4px 2px 50px black;
    background-color: #161616;
    cursor: pointer;
`

const Img = styled.img`
    height: 150px;
    width: 130px;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;

`

const Title = styled.h1`
  font-size: 20px;
  padding-left: 10px;
  margin: 0;
  color: white;
`;

const Slogan = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;'
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding-left: 10px;
`;

const Line = styled.img`
  height: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 10px;
`;

const Subtitle = styled.h2`
  color: green;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  margin: 0px;
  font-size: 18px;
`;

const ImgContainer = styled.div`
justify-content: center;
align-items: center;
text-align: center;
padding: 0;
margin: 0;

`
const Overlay = styled.div`
position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 240px;
  width: 240px;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(2,38,2,1);
  padding-right: 0;
  margin: 0;
`

const Text = styled.h3`
    height: 100%;
    color: white;
    padding-left: 20px;
    text-align: center;
    justify-content: center;
    padding-top: 110px;
    padding-bottom: auto;
    padding-left: 0;
    margin: 0;
`

export const Card = ({ImgUrl, Naam, Functie, quote}) => {




  return (
    <Container class='container'>
        <ImgContainer>
            <Img src= {ImgUrl}/>
        </ImgContainer>
        
        <Title>{Naam}</Title>
        <Slogan>
            <Line src={line} />
            <Subtitle>{Functie}</Subtitle>
        </Slogan>
        <Overlay className='overlay'>
          <Text>
            {quote}
          </Text>
        </Overlay>
    </Container>
    
  )
}
export default Card