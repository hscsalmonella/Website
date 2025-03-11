import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import JobListing from '../../components/Joblisting/Joblisting';
import { majors } from '../../components/Joblisting/mockData'; // Importing mock data

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  padding: 0 20px;
  width: 100%;
  height: calc(100vh - 80px); /* Subtracting 80px for the Navbar height */
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
`;

const FilterHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: white
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: ${props => (props.active ? '#6B047F' : 'gray')};
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: 
`;

const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
`;

function Vacatures() {
  const [selectedMajor, setSelectedMajor] = useState(null);

  const handleFilter = major => {
    setSelectedMajor(major);
  };

  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <FilterContainer>
          <FilterHeading>Filter op richting:</FilterHeading>
          <FilterButton
            active={selectedMajor === null}
            onClick={() => handleFilter(null)}
          >
            All
          </FilterButton>
          {majors.map(major => (
            <FilterButton
              key={major.id}
              active={selectedMajor === major.id}
              onClick={() => handleFilter(major.id)}
            >
              {major.name}
            </FilterButton>
          ))}
        </FilterContainer>
        <ListingsContainer>
          <JobListing selectedMajor={selectedMajor} />
        </ListingsContainer>
      </ContentContainer>
    </Container>
  );
}

export default Vacatures;
