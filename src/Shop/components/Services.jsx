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
`

const ItemContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Left = styled.div`
height: 70px;
width: 70px;
background-color: #fff;
margin-right: 30px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;

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

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
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
  @media(max-width: 768px) {
    margin: 10px 0;
  }
`


const Services = () => {



  return (
    <Container>
      <ItemContainer>
        <Left>
          <BsCalendar3 />
        </Left>
        <Right>
          <Title>Open 7 Days a Week</Title>
          <Subtitle>10 AM – 8 PM</Subtitle>
        </Right>
      </ItemContainer>

      <ItemContainer>
        <Left>
          <BsHourglassSplit />
        </Left>
        <Right>
          <Title>Immediate Service</Title>
          <Subtitle>We make glasses right away</Subtitle>
        </Right>
      </ItemContainer>

      <ItemContainer>
        <Left>
          <FaBolt />
        </Left>
        <Right>
          <Title>Repairs and Adjustments</Title>
          <Subtitle>Free adjustment services</Subtitle>
        </Right>
      </ItemContainer>
    </Container>
  )
}

export default Services