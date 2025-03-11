import React from 'react';
import styled from 'styled-components';
import MobileNavbar from '../../Mobile-Components/navbar/MobileNavbar';
import logo from '../../assets/img/schild.png';
import praeses from '../../assets/img/torrinpraeses.jpg';
import Footer from '../../Mobile-Components/Footer/Footer';
import MobileSchild from '../../Mobile-Components/Schild/MobileSchild';
import boekske from '../../assets/files/Boekske_23-24_Sem1.pdf'
import statuten from '../../assets/files/Statuten-HSC-Salmonella.pdf'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 60px;
  background-color: rgb(33,33,33);'
  color: black;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Section = styled.div`
  padding: 20px;
  background-color: #2a2a2a;
  border-radius: 10px;
  margin-bottom: 20px;
   color: white;
`;

const WelcomeSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    color: #366636;
    padding-bottom: 20px;
  }
`;

const WelcomeText = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const CEOImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const DepartmentsSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const DepartmentsTitle = styled.h2`
width: 100%;
text-align: center;
padding-bottom: 20px;
color: #366636;
font-weight: bold;
`

const Department = styled.div`
  text-align: center;
  flex-basis: 30%;
  margin-bottom: 20px;
  h3{
    color: #6b047f;
  }
`;

const SubDepartments = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SubDepartmentItem = styled.li`
  margin-bottom: 5px;
`;

const DepartmentText = styled.h4`
text-align: center;
`

const CompanySongSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    color: #366636;
    padding-bottom: 20px;
  }
`;

const CompanySong = styled.audio`
  margin-bottom: 10px;
  width: 100%;
`;

const Lyrics = styled.p`
  text-align: center;
  padding-bottom: 20px;
`;

const BefriendedCompaniesSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    color: #366636;
    padding-bottom: 20px;
  }
`;




const BevriendeClubsButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

`;

const BefriendedCompanyButton = styled.a`
  padding: 10px 20px;
  background-color: #6b047f;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

`;

const LogoExplanationSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ExplanationText = styled.p`
  text-align: center;
`;

const ButtonsSection = styled(Section)`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

const Button = styled.a`
  margin: 10px;
  padding: 10px 20px;
  background-color: #366636;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

function MobileInfo() {
  return (
    <Container>
      <MobileNavbar />
      <WelcomeSection>
        <h2>Woordje van de praeses</h2>
        <CEOImage src={praeses} alt="Praeses" />
        <WelcomeText>
        "De Salmo" is een legendarische naam gekend doorheen heel Gent! Wanneer de mensen ons zien afkomen weten ze dat het weer een geweldige avond gaat worden. Elke dinsdag zijn we in ons clubcafé, de Cuba, te vinden om er de beste avond in de week van te maken. Hier komen we allemaal samen om bier en plezier te hebben en natuurlijk ook OM TE FEESTEN!!! Tussen of vlak achter de lessen zijn we ook te vinden in The Zone. Dit café vlakbij campus Schoonmeersen is de perfecte plaats om efkes los te laten van die schoolboeken en een pintje bij de hand te pakken. Dit is ook de perfecte tijd om nieuwe vriendschappen te vormen en de gekste plannen te verzinnen om de avond interessant te maken.<br></br><br></br>

        Onze vele activiteiten zijn zeker niet te missen. Cocktail-avonden, cantussen, kroegentochten, bierpongtoernooien,... We doen het allemaal en zeker met de nodige drank natuurlijk! Voor de sporters zijn er natuurlijk ook sportactiviteiten. Heb je altijd al willen weten of je naast dranksport ook goed bent in een andere sport? Er zijn genoeg sporten doorheen het jaar waar we het tegen andere studentenverenigingen opnemen. <br></br><br></br>

        Dus wil je eens zien hoe het leven eruit ziet in de beste club van Gent? Kom eens langs op onze vele activiteiten of wees niet bang om ons te contacteren via onze facebook, instagram of onze mail: hsc.salmonella@gmail.com.<br></br>
        <br></br>
        Ut vivat, crescat et floreat HSC Salmonella!<br></br>
        Torrin De Wree<br></br>
        Praeses HSC Salmonella 2024-2025<br></br><br></br>
          P.S.: Wil je nu al weten wanneer we zeker waar te vinden zijn? Neem dan al een kijkje in onze kalender en schrijf
          het op in jouw agenda!
        </WelcomeText>
      </WelcomeSection>
      <DepartmentsSection>
        <DepartmentsTitle>Voor Wie?<br/></DepartmentsTitle>
      <Department>
          <h3>DIT</h3>
          <SubDepartments>
            <SubDepartmentItem>Toegepaste informatica</SubDepartmentItem>
          </SubDepartments>
        </Department>
        <Department>
          <h3>DBO</h3>
          <SubDepartments>
            <SubDepartmentItem>Organisatie en management</SubDepartmentItem>
            <SubDepartmentItem>Retailmanagement</SubDepartmentItem>
          </SubDepartments>
        </Department>
        <Department>
          <h3>DBT</h3>
          <SubDepartments>
            <SubDepartmentItem>Chemie</SubDepartmentItem>
            <SubDepartmentItem>Elektromechanica</SubDepartmentItem>
            <SubDepartmentItem>Houttechnologie</SubDepartmentItem>
            <SubDepartmentItem>Houttechnologie</SubDepartmentItem>
            <SubDepartmentItem>Modetechnologie</SubDepartmentItem>
            <SubDepartmentItem>Textieltechnologie</SubDepartmentItem>
            <SubDepartmentItem>Vastgoed</SubDepartmentItem>
          </SubDepartments>
        </Department>
        <DepartmentText>Natuurlijk ben je ook bij ons welkom als je een andere studierichting volgt!</DepartmentText>
      </DepartmentsSection>
      <CompanySongSection>
        <h2>Ons Clublied</h2>
        <Lyrics>
          1. Salmonella is een club van kameraden
          <br />
          Van weinig woorden en veel daden
          <br />
          We gaan soms naar de les
          <br />
          Maar hangen liever aan de fles
          <br />
          Een vatteke valt voor ons niet te versmaden.
          <br />
          <br />
          Refrein:
          <br />
          Eh retteketek jeneivelklet
          <br />
          We zijn weer op de zwier
          <br />
          Dan gaan we met z'n allen heen
          <br />
          En maken veel plezier.
          <br />
          <br />
          2. Uit Vlaanderen komen al ons leden
          <br />
          Uit vele dorpen en veel steden
          <br />
          Studeren wij in Gent
          <br />
          Voor een heel klein percent
          <br />
          De rest van onze tijd is amuseren.
        </Lyrics>
        {/*<CompanySong controls>
          <source src="company_song.mp3" type="audio/mp3" />
        </CompanySong>*/ }
        
      </CompanySongSection>
      <BefriendedCompaniesSection>
        <h2>Onze Bevriende Clubs</h2>
        <BevriendeClubsButtons>
           <BefriendedCompanyButton href="https://www.westlandia-gent.be/" target="_blank">
          Westlandia
        </BefriendedCompanyButton>
        <BefriendedCompanyButton href="https://curatiogent.be/" target="_blank">
          HSC Curatio
        </BefriendedCompanyButton>
        <BefriendedCompanyButton href="https://vetogent.fkgent.be/" target="_blank">
          Veto Gent
        </BefriendedCompanyButton> 
        </BevriendeClubsButtons>
        
      </BefriendedCompaniesSection>
      <LogoExplanationSection>
        <MobileSchild/>
      </LogoExplanationSection>
      <ButtonsSection>
        <Button href={statuten} target="_blank">
          Statuten
        </Button>
        <Button href={boekske} target="_blank">
          Boekske
        </Button>
      </ButtonsSection>
      <Footer/>
    </Container>
  );
}

export default MobileInfo;
