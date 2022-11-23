import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { publicAxios } from '../api'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
`

const ContainerTitle = styled.div`
  margin: 20px;
`

const Title = styled.h1`
    display: inline-block;
    margin-bottom: 0;
    color: teal;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    position:relative;

  &:before{
    position: absolute;
    top: 50%;
    right: -60px;
    content: '';
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 50px;
    height: 1px;
    background: teal;
  }

  &:after{
    position: absolute;
    top: 50%;
    left: -60px;
    content: '';
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 50px;
    height: 1px;
    background: teal;
  }
`

const StyledCarousel = styled(Carousel)`
  width: 100%;
  ul {
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`


const ContractItem = styled.div`
  height: 120px;
  max-width: 240px;
`


const Image = styled.img`
  object-fit: contain;
  height: 100%;
`

const ContractSlider = () => {
  
  const items = [
    {image: '/images/contracts/1.jpeg'},
    {image: '/images/contracts/2.jpeg'},
    {image: '/images/contracts/3.jpeg'},
    {image: '/images/contracts/4.jpeg'},
    {image: '/images/contracts/5.jpeg'},
    {image: '/images/contracts/6.jpeg'},
    {image: '/images/contracts/axa.png'},
    {image: '/images/contracts/med-right.png'},
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>contracts</Title>
      </ContainerTitle>
      <StyledCarousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
      {items.map((item) => (
        <ContractItem key={item.image}>
          <Image src={item.image} />
        </ContractItem>
      ))}
      </StyledCarousel>
    </Container>
  )
}
export default ContractSlider