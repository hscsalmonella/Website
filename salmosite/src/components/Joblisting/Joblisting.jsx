import React from 'react';
import styled from 'styled-components';
import { jobs } from './mockData'; // Importing mock data
import logo from '../../assets/img/schild.png';

const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

const JobCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: beige;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
  border-radius: 8px;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: #222222;
`;

const CompanyName = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
  color: #6b047f;
`;

const JobDescription = styled.p`
  font-size: 14px;
  color: #444444;
`;

const MajorList = styled.ul`
  list-style: disc;
  margin-left: 20px;
`;

const MajorItem = styled.li`
  margin-bottom: 4px;
`;

const NoJobsMessage = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 20px;
`;

function JobListing({ selectedMajor }) {
  const filteredJobs = selectedMajor
    ? jobs.filter((job) => job.majors.includes(selectedMajor))
    : jobs;

  return (
    <ListingContainer>
      {filteredJobs.length === 0 ? (
        <NoJobsMessage>Nog geen vacatures beschikbaar...</NoJobsMessage>
      ) : (
        filteredJobs.map((job) => (
          <JobCard key={job.id}>
            <CompanyLogo src={logo} alt={job.company} />
            <JobDetails>
              <JobTitle>{job.title}</JobTitle>
              <CompanyName>{job.company}</CompanyName>
              <JobDescription>{job.description}</JobDescription>
            </JobDetails>
          </JobCard>
        ))
      )}
    </ListingContainer>
  );
}

export default JobListing;
