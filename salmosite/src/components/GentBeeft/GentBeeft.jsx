import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/gentBeeft.jpg';

const Container = styled.div`
  background-position: center;
  height: 25rem;
  font-size: 4rem;
  color: white;
  position: relative;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: cover; /* Ensure the background image covers the entire Section */
`;

const Titel = styled.p`
  margin: 0;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'Fugaz One', sans-serif;
`;

const Onderschrift = styled.a`
  margin: 0;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.2rem;
`;

function GentBeeft() {
  return (
    <Container>
      <Section>
        <Titel>Gent beeft, Salmonella LEEFT!</Titel>
        <Onderschrift>
          Van harte welkom op de website van HSC Salmonella. Deze site heeft als doel jullie in contact te brengen met onze studentenclub zodat we jullie een onvergetelijke studententijd kunnen bezorgen!
        </Onderschrift>
      </Section>
    </Container>
  );
}

export default GentBeeft;
