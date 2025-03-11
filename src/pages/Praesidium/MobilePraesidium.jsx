import React, { useState } from 'react';
import styled from 'styled-components';
import MobileNavbar from '../../Mobile-Components/navbar/MobileNavbar'
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
import Footer from '../../Mobile-Components/Footer/Footer';

const Container = styled.div`
  height: 100vh;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Section = styled.div`
padding: 20px;
padding-bottom: 160px;
padding-top: 40px;
`

const FunctionButton = styled.button`
  background-color: #366636;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 14px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: purple;
  }
`;

const PraesidiumSection = styled.div`
padding-top: 60px;
`

const MemberContainer = styled.div`

  align-items: center;
  justify-content: center;
`;

const MemberName = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  color: darkgreen;
  padding-bottom: 10px;
`;

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  justify-self: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const MemberDetails = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  margin-top: 0px;
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 5px;
  color: white;
  text-align: center;
  align-items: center;
`;

const Question = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: purple;
`;

const Answer = styled.div`
  margin-bottom: 15px;
`;

const members = [
  {
    key: 'praeses',
    role: 'Praeses',
    name: 'Torrin De Wree',
    image: `${praeses}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Bezet/looking for a sugar mommy',
        },
        {
          question: 'Studies?',
          answer: 'Elektromechanica',
        },
        {
          question: "Hobby's?",
          answer: 'Slapen en zuipe',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Cuba, Deli',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Rode vodka',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Home on the range',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Wou nieuwe mense lere kenne om mee te zuipen',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Beetje te veel wijn gezope op een pre en plots wou ik mijn broek nonstop uitdoen in de cuba',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Opstaan en horen da heel de cuba u piemel heeft gezien',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'Sterven aan alcoholvergifteging',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'Te horen krijgen da men lever ok is',
        },
        {
          question: 'Levensmoto?',
          answer: 'Zolang da ge fun hebt ist goe, anders doe ge iets mis.',
        },
      ],
  },
  {
    key: 'vice-praeses',
    role: 'Vice-Praeses',
    name: 'Casper Bieseman',
    image: `${Vice}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'In relatie met bier',
        },
        {
          question: 'Studies?',
          answer: 'Toegepaste Informatica',
        },
        {
          question: "Hobby's?",
          answer: 'Slapen',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Molotov',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Westmalle trippel',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Seven drunk nights',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Er waren gratis pinten',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Ik wou dak het nog wist',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Ik wou dak het nog wist',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'Afstuderen',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'Kunnen wandelen',
        },
        {
          question: 'Levensmoto?',
          answer: 'Lauwe cara, beste cara',
        },
      ],
  },
  {
    key: 'Quaestor',
    role: 'Quaestor',
    name: 'Mirte Bosmans',
    image: `${Quaestor}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Bezet',
        },
        {
          question: 'Studies?',
          answer: 'Elektromechanica',
        },
        {
          question: "Hobby's?",
          answer: 'Paaldansen en zuipen',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Cuba en Deli',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'grasprietjes, rougeke',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Black velvet band',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Vrienden maken met jongens #meisje in elektromechanica',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Verjaardag, bleef maar flessen jenever/spitbull zetten en trakteren rip de rekening de dag erna.',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Allereerste spouwke bij Salmo helemaal over mezelf',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'Huh heb ik dan een toekomst?',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'Kennismaking bij salmo',
        },
        {
          question: 'Levensmoto?',
          answer: 'Rosse centjes tellen ook',
        },
      ],
  },
  {
    key: 'Ab-Actis',
    role: 'Ab-Actis',
    name: 'Liyah Bieseman',
    image: `${AbActis}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Bezet',
        },
        {
          question: 'Studies?',
          answer: 'Lager Onderwijs',
        },
        {
          question: "Hobby's?",
          answer: 'Salmo',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Cuba & Deli',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Mojito als de rekening het toelaat',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Torenspits van bommel',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Om nieuwe vrienden te maken',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Kan ik mij niet herinneren',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'In slaap vallen aan de toog van de Cuba',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'afstuderen',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'In salmo gaan',
        },
        {
          question: 'Levensmoto?',
          answer: 'Gewoon er voor gaan',
        },
      ],
  },
  {
    key: 'P.R.',
    role: 'P.R.',
    name: 'Febe Declerck',
    image: `${PR}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Single',
        },
        {
          question: 'Studies?',
          answer: 'Klinische Orthopedagogiek',
        },
        {
          question: "Hobby's?",
          answer: 'Salmo en Zwemmen',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Cuba en Deli',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Grassprietje',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Jan KlaNog Te Verkiezeassen de Trompetter',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Overtuigd door een rosse',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Van een rijdende fiets springen',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Naaktslak spelen op een theatervoorstelling en mijn broek is helemaal doorgescheurd',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'Doe ik in de toekomst',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'De vele vriendjes door Salmo',
        },
        {
          question: 'Levensmoto?',
          answer: 'Mijn opa zei altijd assan rechte dueren',
        },
      ],
  },
  {
    key: 'Schachtentemmer',
    role: 'Schachtentemmer',
    name: 'Ibe Schuddinck',
    image: `${Temmer}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Single and ready to mingle (+18)',
        },
        {
          question: 'Studies?',
          answer: 'uuuuuuhhhh...',
        },
        {
          question: "Hobby's?",
          answer: 'Feesten, feesten en af en toe eens slapen',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Deli, Cuba & The Zone',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Vodka redbull, Spitbull en Ouwen Duiker',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Jan Klaassen',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Ik zocht leuke vrienden om met te drinken',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'In slaap gevallen op de toilet van Deli en Lore heeft de deur open moeten doen #loreheeftmijnblotepoepgezien',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Ik heb geen schaamte, dus nog nooit meegemaakt',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'Mijn tijd in overpoort afronden en eindelijk volwassen worden',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: '...',
        },
        {
          question: 'Levensmoto?',
          answer: 'What is good for the hole, is not always good for the soul',
        },
      ],
  },
  {
    key: 'Sportleider',
    role: 'Sportleider',
    name: 'Jordy M.',
    image: `${Sport}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'single',
        },
        {
          question: 'Studies?',
          answer: 'Marketing en KMO',
        },
        {
          question: "Hobby's?",
          answer: 'Degusteren',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Cuba & Deli',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'spitbull, blue lagoon of ne goeie whisky',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'het schots volkslied',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'perongelijk door Tibor',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Aziaat',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Ik weet niet waar je het over hebt',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'boot',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'wembly, Tommorowland',
        },
        {
          question: 'Levensmoto?',
          answer: 'Eerlijks duurt het langst',
        },
      ],
  },
  {
    key: 'Cantor',
    role: 'Cantor',
    name: 'Ben Cremer',
    image: `${Cantor}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Single',
        },
        {
          question: 'Studies?',
          answer: 'Toegepaste Informatica, Politieke Wetenschappen',
        },
        {
          question: "Hobby's?",
          answer: 'Salmo',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Cuba, Deli en Zone',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Spitbull, Malheur 12',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Triomfantelijk lied van de Zilvervloot',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Mensen leren kennen en groepsgevoel',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Bezetting van het gravensteen',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Er zijn er zoveel na al die jaren',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'afstuderen',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'mijn eerste clubavond',
        },
        {
          question: 'Levensmoto?',
          answer: 'De volhouder wint',
        },
      ],
  },
  {
    key: 'Zedenmeester',
    role: 'Zedenmeester',
    name: 'Maarten Wens (Makke)',
    image: `${Zedenmeester}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Single',
        },
        {
          question: 'Studies?',
          answer: 'vastgoed',
        },
        {
          question: "Hobby's?",
          answer: 'uitgaan',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Cuba en Deli',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Stella en Spitbull',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Jan Klaassen de Trompetter',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'door bij Janne, Ben en Sasha op kot te zitten',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Naar huis moeten kruipen met hulp van Eline',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'In de vijver van Citadel vallen en kletsnat naar huis',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'een nieuwe lever zoeken',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'Tomorrowland met de boys',
        },
        {
          question: 'Levensmoto?',
          answer: 'Liever te vroeg in de kist dan een feestje gemist',
        },
      ],
  },
  {
    key: 'Webmaster',
    role: 'Webmaster',
    name: 'Tiebe Rutten',
    image: `${Webmaster}`,
    questions: [
        {
          question: 'Burgerlijke staat?',
          answer: 'Single',
        },
        {
          question: 'Studies?',
          answer: 'Houttechnologie',
        },
        {
          question: "Hobby's?",
          answer: 'Voetballen',
        },
        {
          question: 'Favoriete Café?',
          answer: 'Deli, Luxx',
        },
        {
          question: 'Favoriete drankje?',
          answer: 'Cristal vant vat',
        },
        {
          question: 'Favoriete liedje uit de codex?',
          answer: 'Jan Klaassen de Trompetter',
        },
        {
          question: 'Waarom ben je lid geworden van Salmo?',
          answer: 'Voor leuke mensen te ontmoeten',
        },
        {
          question: 'Zatste moment/blunder?',
          answer: 'Weet ik niet meer',
        },
        {
          question: 'Meest gênante moment?',
          answer: 'Onbewust tegen een fietser aanlopen',
        },
        {
          question: 'Toekomstplannen?',
          answer: 'afstuderen',
        },
        {
          question: 'Belangerijkste gebeurtenis in je leven?',
          answer: 'geboren worden',
        },
        {
          question: 'Levensmoto?',
          answer: 'Het komt zo nauw nie',
        },
      ],
  },
  
];

const MobilePraesidium = () => {
    const [activeMember, setActiveMember] = useState(null);
  
    const handleMemberClick = (index) => {
      if (activeMember === index) {
        setActiveMember(null);
      } else {
        setActiveMember(index);
      }
    };
  
    return (
      <Container>
        <Section>
          <MobileNavbar/>
        <PraesidiumSection>
           {members.map((member, index) => (
          <MemberContainer key={member.key}>
            <FunctionButton onClick={() => handleMemberClick(index)}>
              {member.role}
            </FunctionButton>
            <MemberDetails active={activeMember === index}>
                <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              
              <div>
                {member.questions.map((question, index) => (
                  <div key={index}>
                    <Question>{question.question}</Question>
                    <Answer>{question.answer}</Answer>
                  </div>
                ))}
              </div>
            </MemberDetails>
          </MemberContainer>
        ))} 
        </PraesidiumSection>  
        </Section>
        
        <Footer/>
      </Container>
    );
  };
  
  export default MobilePraesidium;