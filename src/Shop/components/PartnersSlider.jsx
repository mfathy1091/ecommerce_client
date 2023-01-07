import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { publicAxios } from '../api'
import styled from 'styled-components';
import { partner1, partner2, partner3, partner4, partner5, partner6,
  partner7, partner8 ,partner9, partner10 } from '../../assets/images';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  padding: 0 10% 70px 10%;
  height: 100%;

@media (max-width: 768px) {
  padding: 30px 10px;
}
`

const ContainerTitle = styled.div`
  margin: 20px 20px 20px 20px;
`

const Title = styled.h1`
  display: inline-block;
  color: var(--primary-text-color);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  position:relative;
  font-family: 'Nunito', sans-serif;

  ::after {
    position: absolute;
    bottom: -35%;
    content: '';
    background: var(--primary-text-color);
    width: 40px;
    height: 3px;
    left: 0;
    right: 0;
    margin: auto;
  }
`

const StyledCarousel = styled(Carousel)`
  width: 100%;
  padding-bottom: 20px;
  ul {
    li {
      display: flex;
      justify-content: space-around;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  button:nth-child(2), button:nth-child(3) {
    :before {
      color: black;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  button:nth-child(2) {
    left: 0;
    z-index: 1;
  }

  button:nth-child(3) {
    right: 0;
    z-index: 1;
  }


`


const ContractItem = styled.div`
  max-height: 120px;
  max-width: 120px;
`


const Image = styled.img`
  object-fit: contain;
  height: 100%;
`

const PartnersSlider = () => {

  const items = [
    { image: partner1 },
    { image: partner2 },
    { image: partner3 },
    { image: partner4 },
    { image: partner5 },
    { image: partner6 },
    { image: partner7 },
    { image: partner8 },
    { image: partner9 },
    { image: partner10 },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>OUR Partners</Title>
      </ContainerTitle>
      <StyledCarousel
        swipeable={true}
        responsive={responsive}
        infinite={true}
        showDots={true}
        autoPlay={false}
        autoPlaySpeed={3000}
      >
        {items.map((item, i) => (
          <ContractItem key={i}>
            <Image src={item.image} key={i} />
          </ContractItem>
        ))}
      </StyledCarousel>
    </Container>
  )
}
export default PartnersSlider