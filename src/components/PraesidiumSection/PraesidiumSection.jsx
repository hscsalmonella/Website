import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import praeses from '../../assets/img/praesidium/Praeses.jpg'
import Vice from '../../assets/img/praesidium/Vice.png'
import Quaestor from '../../assets/img/praesidium/Q.jpg'
import AbActis from '../../assets/img/praesidium/Ab.jpg'
import PR from '../../assets/img/praesidium/PR.jpg'
import Temmer from '../../assets/img/praesidium/Temmer.jpg'
import Sport from '../../assets/img/praesidium/Sport.jpg'
import Cantor from '../../assets/img/praesidium/Cantor.jpg'
import Zedenmeester from '../../assets/img/praesidium/Zeden.jpg'
import Webmaster from '../../assets/img/praesidium/Web.png'
import Popup from '../InfoCardPopup/InfoCardPopup'
import {useState} from 'react'
import "./PraesidiumSection.css"

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 60px;
    overflow: hidden;
    @media (min-height: 768px) {
      height: 100vh;
    }
`
const Section = styled.div`
height: 100%;
display: grid;
grid-template-areas:
    	"p vp q ab"
        "pr st sp c"
        "wit ze we witt";

        column-gap: 5em;
        row-gap: 1rem;
padding-top: 2.5rem;
`

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;


const Whitecell1 = styled.div`
grid-area: wit;
`

const Whitecell2= styled.div`
grid-area: witt;
`

const data = [
    ["Praeses", "Torrin De Wree", `${praeses}`,"Bezet/looking for a sugar mommy", "Elektromechanica", "Slapen en zuipe", "Cuba, Deli", "Rode Vodka","Home on the range",
    "Wou nieuwe mense lere kenne om mee te zuipen", 
    "Beetje te veel wijn gezope op een pre en plots wou ik mijn broek nonstop uitdoen in de cuba", 
    "Opstaan en horen da heel de cuba u piemel heeft gezien", 
    "Sterven aan alcoholvergifteging", 
    "Te horen krijgen da men lever ok is", 
    "Zolang da ge fun hebt ist goe, anders doe ge iets mis"],
    ["Vice-Praeses", "Casper Bieseman", `${Vice}`,"In relatie met bier", 
    "Toegepaste Informatica", 
    "Slapen", 
    "Molotov", 
    "Westmalle Trippel",
    "Seven drunk nights",
    "Er waren gratis pinten", 
    "Ik wou dat ik het nog wist", 
    "Ik wou dat ik het nog wist", 
    "afstuderen", 
    "kunnen wandelen", 
    "Lauwe cara, beste cara"],
    ["Quaestor", "Mirte Bosmans", `${Quaestor}`,"Bezet", 
    "Elektromechanica", 
    "Paaldansen en zuipen", 
    "Cuba en Deli", 
    "grasprietjes, rougeke",
    "Black velvet band",
    "Vrienden maken met jongens #meisje in elektromechanica", 
    "Verjaardag, bleef maar flessen jenever/spitbull zetten en trakteren rip de rekening de dag erna.", 
    "Allereerste spouwke bij Salmo helemaal over mezelf", 
    "Huh heb ik dan een toekomst?", 
    "Kennismaking bij salmo", 
    "Rosse centjes tellen ook"],
    ["Ab-Actis", "Liyah Bieseman", `${AbActis}`,"Bezet", 
    "Lager onderwijs", 
    "Salmo", 
    "Cuba & Deli", 
    "Mojito als de rekening het toelaat",
    "Torenspits van bommel",
    "Om nieuwe vrienden te maken", 
    "Kan ik mij niet herinneren", 
    "In slaap vallen aan de toog van de Cuba", 
    "afstuderen", 
    "In salmo gaan", 
    "Gewoon er voor gaan"],
    ["P.R.", "Febe Declerck", `${PR}`,"Single", 
    "Klinische Orthopedagogiek", 
    "Salmo en Zwemmen", 
    "Cuba en Deli", 
    "Grassprietje",
    "Jan Klaassen de trompetter",
    "Overtuigd door een rosse", 
    "Van een rijdende fiets springen", 
    "Naaktslak spelen op een theatervoorstelling en mijn broek is helemaal doorgescheurd", 
    "Doe ik in de toekomst", 
    "De vele vriendjes door salmo", 
    "Mijn opa zei altijd assan rechte dueren"],
    ["Schachtentemmer", "Ibe Schuddinck", `${Temmer}`,"Single and ready to mingle (+18)", 
    "uuuuuuhhhh...", 
    "Feesten, feesten en af en toe eens slapen", 
    "Deli, Cuba & The Zone", 
    "Vodka redbull, Spitbull en Ouwen Duiker",
    "Jan Klaassen",
    "Ik zocht leuke vrienden om met te drinken", 
    "In slaap gevallen op de toilet van Deli en Lore heeft de deur open moeten doen #loreheeftmijnblotepoepgezien", 
    "Ik heb geen schaamte, dus nog nooit meegemaakt", 
    "Mijn tijd in overpoort afronden en eindelijk volwassen worden", 
    "...", 
    "What is good for the hole, is not always good for the soul"],
    ["Sportleider", "Jordy M.", `${Sport}`,"single", 
    "Marketing en KMO", 
    "Degusteren", 
    "Cuba & Deli", 
    "Spitbull, blue lagoon of ne goeie whisky",
    "Het schots volkslied",
    "perongeluk door Tibor", 
    "Aziaat", 
    "Ik weet niet waar je het over hebt", 
    "boot", 
    "Wembly, Tomorrowland", 
    "Eerlijks duurt het langst"],
    ["Cantor", "Ben Cremer", `${Cantor}`,"Single", 
    "Toegepaste Informatica, politieke wetenschappen", 
    "Salmo", 
    "Cuba, Deli en Zone", 
    "Spitbull, Malheur 12",
    "Triomfantelijk lied van de Zilvervloot",
    "Mensen leren kennen en groepsgevoel", 
    "Bezetting van het gravensteen", 
    "Er zijn er zoveel na al die jaren", 
    "afstuderen", 
    "mijn eerste clubavond", 
    "De volhouder wint"],
    ["Zedenmeester", "Maarten Wens (Makke)", `${Zedenmeester}`,"Single", 
    "vastgoed", 
    "uitgaan", 
    "Cuba en Deli", 
    "Stella en Spitbull",
    "Jan Klaassen de Trompetter",
    "door bij Janne, Ben en Sasha op kot te zitten", 
    "Naar huis moeten kruipen met hulp van Eline", 
    "Zat in de vijver van Citadel vallen en kletsnat naar huis", 
    "Een nieuwe lever zoeken", 
    "Naar Tomorrowland gaan me de boys", 
    "Liever te vroeg in de kist dan een feestje gemist"],
    ["Webmaster", "Tiebe Rutten", `${Webmaster}`,"Single", 
    "Houttechnologie", 
    "voetballen", 
    "Deli, Luxx", 
    "Cristal vant vat",
    "Jan Klaassen de Trompetter",
    "Voor leuke mensen te ontmoeten", 
    "Weet ik niet meer", 
    "Onbewust tegen een fietser aanlopen", 
    "afstuderen", 
    "geboren worden", 
    "Het komt zo nauw nie"],
  ];


function PraesidiumSection() {
  const [Popupstate, SetPopupState] = useState(false);

  const [WieGekozen, SetWieGekozen] = useState(data[0]);

  function click(item) {
    SetWieGekozen(item);
    SetPopupState(true);
  }

  return (
    <Container>
        <Navbar />
        
        <Section>
          <Whitecell1></Whitecell1>
          <Whitecell2></Whitecell2>
        {data.map((item) => (
            <div onClick={() => click(item)}><Card Naam={item[1]} Functie={item[0]} ImgUrl={item[2]} quote={"Meer info"}>
                  {item}
                </Card></div>
                
              ))} 
              <Popup trigger={Popupstate} setTrigger={SetPopupState}>
                  <div className='container'>
                      <div className='upper'>
                        
                        <img src={WieGekozen[2]} alt="foto" className='foto'/>
                        <h3 className='functie'>{WieGekozen[0]}</h3>
                        <h3 className='naam'>{WieGekozen[1]}</h3>
                      </div>
                      <div className='down'>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Burgelijke staat</h4>
                            <h4 className='antwoord'>{WieGekozen[3]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Studies</h4>
                            <h4 className='antwoord'>{WieGekozen[4]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Hobby's</h4>
                            <h4 className='antwoord'>{WieGekozen[5]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Favoriete cafe</h4>
                            <h4 className='antwoord'>{WieGekozen[6]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Favoriete drankje</h4>
                            <h4 className='antwoord'>{WieGekozen[7]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Favoriet liedje uit codex</h4>
                            <h4 className='antwoord'>{WieGekozen[8]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Waarom benje lid geworden</h4>
                            <h4 className='antwoord'>{WieGekozen[9]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Zatste moment/blunder?</h4>
                            <h4 className='antwoord'>{WieGekozen[10]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Meest gênante moment</h4>
                            <h4 className='antwoord'>{WieGekozen[11]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Toekomstplannen</h4>
                            <h4 className='antwoord'>{WieGekozen[12]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Belangerijkste gebeurtenis in je leven</h4>
                            <h4 className='antwoord'>{WieGekozen[13]}</h4>
                          </div>
                          <div className='vraagantwoord'>
                            <h4 className='vraag'>Levensmoto</h4>
                            <h4 className='antwoord'>{WieGekozen[14]}</h4>
                          </div>

                      </div>

                  </div>
              </Popup>
        </Section>
        
    </Container>
  )
}

export default PraesidiumSection