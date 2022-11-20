import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaBolt, FaWrench } from 'react-icons/fa'


import { BsHourglassSplit, BsCalendar3 } from 'react-icons/bs'

const Container = styled.div`
  padding: 3rem 9rem;
  position: relative;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`



const ItemContainer = styled.div`
    position: relative;
    display: flex;

@media(max-width: 768px) {
  justify-content: space-between;
  margin: 20px;
}
`


const IconContainer = styled.div`
height: 70px;
width: 70px;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 768px) {
  margin-bottom: 10px;
}
svg {
  font-size: 40px;
  color: teal;
}

`


const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
`


const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 3px;
  letter-spacing: 0.5px;
`
const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  line-height: 27px;
`


const Services = () => {



  return (
    <Container>
        <ItemContainer>
          <IconContainer>
            <BsCalendar3 />
          </IconContainer>
          <DetailsContainer>
            <Title>Open 7 Days a Week</Title>
            <Subtitle>10 AM – 8 PM</Subtitle>
          </DetailsContainer>
        </ItemContainer>

        <ItemContainer>
          <IconContainer>
            <BsHourglassSplit />
          </IconContainer>
          <DetailsContainer>
            <Title>Immediate Service</Title>
            <Subtitle>We make glasses right away</Subtitle>
          </DetailsContainer>
        </ItemContainer>

        <ItemContainer>
          <IconContainer>
            <FaWrench />
          </IconContainer>
          <DetailsContainer>
            <Title>Repairs and Adjustments</Title>
            <Subtitle>Free adjustment services</Subtitle>
          </DetailsContainer>
        </ItemContainer>
    </Container>
  )
}

export default Services