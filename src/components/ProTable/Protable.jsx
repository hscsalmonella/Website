import React, { useState } from 'react';
import styled from 'styled-components';
import { Propraesidia } from './propraesidia';
import { PropraesidiaTile } from '../ProPraesidiaTile/ProPraesidiaTile';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Section = styled.div`
  width: 100%;
  padding-top: 50px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  background-color: green;
  width: 240px;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 60px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333333;
  }

  &:focus {
    outline: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 1090px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ProTable() {
  const [selectedYear, setSelectedYear] = useState(0); // Set default to the first object

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const propraesidium = Propraesidia[selectedYear];

  const filteredKeys = Object.keys(propraesidium).filter(
    (key) => key !== 'Jaar' && key !== 'img'
  );

  return (
    <Container>
      <Section>
        <Select value={selectedYear} onChange={handleYearChange}>
          {Propraesidia.map((propraesidium, index) => (
            <option key={index} value={index}>
              {propraesidium.Jaar}
            </option>
          ))}
        </Select>
      </Section>
      <Grid>
        {filteredKeys.map((key) => (
          <PropraesidiaTile
            key={key}
            Naam={key}
            Functie={propraesidium[key]}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default ProTable;
