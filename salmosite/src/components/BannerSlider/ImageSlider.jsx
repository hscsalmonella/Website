import React, { useState, useEffect } from "react";
import styled from "styled-components";

const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  right: 15px;
  z-index: 10;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
  z-index: 10;
`;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Section = styled.div`
height: 100%;
scroll-snap-align: center;
position: relative;
align-items: center;
justify-content: space-between;
`

const BannerText = styled.div`
height: 100%;
width: 100%;
display: flex;
flexDirection: column;
align-items: center;
justify-content: center;
color: #fff;
font-size: 2rem;
font-family: altair;
z-index: 0;
position: absolute;
`

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 4500,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlayTime]);

  return (
    <Section>
      <Container {...props}>
        <Indicator
          currentSlide={currentSlide}
          amountSlides={images.length}
          nextSlide={nextSlide}
        />
        <Gradient />
      <BannerText >
            <h1>EEN CLUB VAN KAMERADEN</h1>
        </BannerText>

        {images.map((imageUrl, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          ></Slide>
        ))}
        
        
      </Container>
      </Section>
  );
};

export default ImageSlider;