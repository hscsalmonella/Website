import React from 'react';
import styled from 'styled-components';
import "./ProPraesidiaTile.css";
import line from '../../assets/img/line.png';

const Container = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  &:hover .overlay {
    opacity: 1;
  }
  background-color: #161616;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  padding-left: 10px;
  margin: 0;
  color: #68037c;
`;

const Slogan = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding-left: 10px;
  margin-top: 5px;
`;

const Line = styled.img`
  height: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 10px;
`;

const Subtitle = styled.h2`
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  margin: 0px;
  font-size: 18px;
`;

export const PropraesidiaTile = ({ ImgUrl, Naam, Functie, quote }) => {
  return (
    <Container className="container">
      <Title>{Naam}</Title>
      <Slogan>
        <Subtitle>{Functie}</Subtitle>
      </Slogan>
    </Container>
  );
};

export default PropraesidiaTile;
