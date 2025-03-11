import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import fotoeline from '../../assets/img/torrinpraeses.jpg'
import { css } from 'styled-components';

const Container = styled.div`
background-color: rgb(40, 40, 40);
color: white;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 20px;
@media only screen and (max-width: 768px) {
  height: auto;
}
`

const Section = styled.div`
    height: 100%;
    width: 80%;
    scroll-snap-align: center;
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    align-items: center;

`
const LinksContainer = styled.div`
        width: 50%;
        height: 100%;
        align-items: center;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
`
const RechtsContainer = styled.div`
height: 100%;
max-width: 50%;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;

@media only screen and (max-width: 768px) {
  max-width: 100%;
}
`
const ImgContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Image = styled.img`
height: 300px;
padding-right: 20px;

`

const TitelContainer = styled.div`
margin-bottom: 20px;
padding-bottom: 20px;

`

const TitelBoven = styled.div`
font-size: 50px;
color: #366636;
padding-bottom: 10px;
`


const TextContainer = styled.div`
color: #c0c0c0;
background-color: #262626;
box-shadow: 0px 0px 20px 6px rgba(255, 255, 255, 0.08);
text-align: left;
padding: 25px;
`

const Text = styled.div`
width: 100%;
font-size: medium;
`


function Praeseswoord() {
  return (
      <Container>
          <Section>
            <LinksContainer>
              <ImgContainer>
                <Image src={fotoeline}/>
              </ImgContainer>
            </LinksContainer>
            <RechtsContainer>
              <TitelContainer>
                <TitelBoven>Woordje van de Praeses</TitelBoven>
                <TextContainer>
                  <Text>
                  "De Salmo" is een legendarische naam gekend doorheen heel Gent! Wanneer de mensen ons zien afkomen weten ze dat het weer een geweldige avond gaat worden. Elke dinsdag zijn we in ons clubcafé, de Cuba, te vinden om er de beste avond in de week van te maken. Hier komen we allemaal samen om bier en plezier te hebben en natuurlijk ook OM TE FEESTEN!!! Tussen of vlak achter de lessen zijn we ook te vinden in The Zone. Dit café vlakbij campus Schoonmeersen is de perfecte plaats om efkes los te laten van die schoolboeken en een pintje bij de hand te pakken. Dit is ook de perfecte tijd om nieuwe vriendschappen te vormen en de gekste plannen te verzinnen om de avond interessant te maken.<br /><br />

                  Onze vele activiteiten zijn zeker niet te missen. Cocktail-avonden, cantussen, kroegentochten, bierpongtoernooien,... We doen het allemaal en zeker met de nodige drank natuurlijk! Voor de sporters zijn er natuurlijk ook sportactiviteiten. Heb je altijd al willen weten of je naast dranksport ook goed bent in een andere sport? Er zijn genoeg sporten doorheen het jaar waar we het tegen andere studentenverenigingen opnemen.<br /><br />

                  Dus wil je eens zien hoe het leven eruit ziet in de beste club van Gent? Kom eens langs op onze vele activiteiten of wees niet bang om ons te contacteren via onze facebook, instagram of onze mail: hsc.salmonella@gmail.com.<br /><br />

                  Ut vivat, crescat et floreat HSC Salmonella!<br />
                  Torrin De Wree<br />
                  Praeses HSC Salmonella 2024-2025<br /><br />
                  
                  P.S.: Wil je nu al weten wanneer we zeker waar te vinden zijn? Neem dan al een kijkje in onze kalender en schrijf het op in jouw agenda!
                  </Text>
                </TextContainer>
              </TitelContainer>
            </RechtsContainer>
          </Section>
      </Container>
  )
}

export default Praeseswoord