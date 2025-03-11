import React from 'react';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';

import Webmaster from '../../assets/img/webwebweb.jpg';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Section = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    max-width: 50%;  /* Adjust the image size as needed */
    height: auto;
    border-radius: 8px; /* Add rounded corners to the image */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Add a subtle shadow to the image */
`;

const Text = styled.p`
    font-size: 24px;  /* Adjust the text size as needed */
    font-weight: bold; /* Make the text bold */
    text-transform: uppercase; /* Uppercase the text */
    margin-top: 20px; /* Add spacing between the image and text */
    color: white;
`;

function Secretfile() {
    return (
        <Container>
            <Navbar />
            <Section>
                <Image src={Webmaster} alt="Web Image" />
                <Text>WEB WEB WEB WEB WEB WEB!</Text>
            </Section>
        </Container>
    );
}

export default Secretfile;
