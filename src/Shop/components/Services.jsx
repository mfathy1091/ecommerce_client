import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaBolt } from 'react-icons/fa'


import { BsHourglassSplit, BsCalendar3 } from 'react-icons/bs'

const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 50px 20px;
background-color: #f2f2f2;

@media(max-width: 768px) {
  flex-direction: column;
}
`


const ItemContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


@media(max-width: 768px) {
  justify-content: space-between;
  margin: 20px;
}
`

const Top = styled.div`
height: 70px;
width: 70px;
background-color: #fff;
margin-bottom: 30px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 768px) {
  margin-bottom: 10px;
}
svg {
  font-size: 30px;
  color: #8b8888;
}
&:hover > svg {
  color: #1abc9c;
}
`

const Icon = styled.img`
  width: 50%;
`

const Down = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
align-items: center;
  gap: 5px;
`


const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`
const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  line-height: 27px;
  text-align: center;
`


const Services = () => {



  return (
    <Container>
      <ItemContainer>
        <Top>
          <BsCalendar3 />
        </Top>
        <Down>
          <Title>Open 7 Days a Week</Title>
          <Subtitle>10 AM – 8 PM</Subtitle>
        </Down>
      </ItemContainer>

      <ItemContainer>
        <Top>
          <BsHourglassSplit />
        </Top>
        <Down>
          <Title>Immediate Service</Title>
          <Subtitle>We make glasses right away</Subtitle>
        </Down>
      </ItemContainer>

      <ItemContainer>
        <Top>
          <FaBolt />
        </Top>
        <Down>
          <Title>Repairs and Adjustments</Title>
          <Subtitle>Free adjustment services</Subtitle>
        </Down>
      </ItemContainer>
    </Container>
  )
}

export default Services