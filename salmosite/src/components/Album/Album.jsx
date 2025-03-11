import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
import ImageSlider from '../BannerSlider/ImageSlider'

import image1 from "../../assets/img/banner/slide_1.png";
import image2 from "../../assets/img/banner/slide_2.jpg"
import image3 from "../../assets/img/banner/slide_3.png";
import image4 from "../../assets/img/banner/slide_4.png";
import image5 from "../../assets/img/banner/slide_5.png";
import image6 from "../../assets/img/banner/slide_6.png";
import image7 from "../../assets/img/banner/slide_7.png";

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

`

const Section = styled.div`
    height: 100%;
    postion: relative;
`

const BannerText = styled.div`
display: "flex",
flexDirection: "column",
alignItems: "center",
color: "#fff",
fontSize: "2rem"
z-index: 0;

`


function Album() {
  return (
    <Container>
        <Navbar />
        <Section>
                <ImageSlider images={[image1,image2, image7, image3, image4, image5, image6]}>
                    <BannerText >'
                      <h1>EEN CLUB VAN KAMERADEN</h1>

                    </BannerText>
                    
                </ImageSlider>
        </Section>
    </Container>
  )
}

export default Album