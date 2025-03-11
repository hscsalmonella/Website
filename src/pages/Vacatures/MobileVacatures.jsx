import React, { useState } from 'react';
import styled from 'styled-components';
import MobileNavbar from '../../Mobile-Components/navbar/MobileNavbar';
import JobListing from '../../components/Joblisting/Joblisting';
import { majors } from '../../components/Joblisting/mockData'; // Importing mock data
import Footer from '../../Mobile-Components/Footer/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  min-height: 100vh; 
`;

const ContentContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 60px;
  width: 100%;
  box-sizing: border-box; 
  margin-top: 60px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
`;

const FilterHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
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
  font-size: 16px;
`;

const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const CollapsibleButton = styled.button`
  padding: 4px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const CollapsibleButtonIcon = styled.span`
  margin-right: 4px;
`;

const FooterContainer = styled.footer`
  width: 100%;
`;

function MobileVacatures() {
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [filterCollapsed, setFilterCollapsed] = useState(false);

  const handleFilter = major => {
    setSelectedMajor(major);
  };

  const toggleFilter = () => {
    setFilterCollapsed(!filterCollapsed);
  };

  return (
    <Container>
      <MobileNavbar />
      <ContentContainer>
        <FilterContainer>
          <FilterHeading>
            <CollapsibleButton onClick={toggleFilter}>Filter op richting
              <CollapsibleButtonIcon>
                {filterCollapsed ? '▼' : '▲'}
              </CollapsibleButtonIcon>
              
            </CollapsibleButton>
          </FilterHeading>
          {!filterCollapsed && (
            <>
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
            </>
          )}
        </FilterContainer>
        <ListingsContainer>
          <JobListing selectedMajor={selectedMajor} />
        </ListingsContainer>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}

export default MobileVacatures;
