import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaBolt, FaWrench } from 'react-icons/fa'


import { BsHourglassSplit, BsCalendar3 } from 'react-icons/bs'

const Container = styled.ul`
  padding: 35px 15px;
  position: relative;
  background-color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`



const Item = styled.li`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

@media(max-width: 768px) {
  justify-content: space-between;
  margin: 20px;
  width: 100%;

}
`


const IconContainer = styled.div`
height: 70px;
width: 70px;
display: flex;
justify-content: center;
align-items: center;
flex: 1;

@media(max-width: 768px) {
  margin-bottom: 10px;
}
svg {
  font-size: 40px;
  color: rgba(255, 255, 255, 0.8);
}

`


const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
flex: 3;
`


const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: rgb(220, 220, 220);
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

  const items = [
    {
      title: "Open 7 Days a Week",
      subtitle: "10 AM – 8 PM",
      icon: <BsCalendar3 />
    },
    {
      title: "Immediate Service",
      subtitle: "We make glasses right away",
      icon: <BsHourglassSplit />
    },
    {
      title: "Repairs and Adjustments",
      subtitle: "Free adjustment services",
      icon: <FaWrench />
    },
  ]

  return (
    <Container>
      {items.map((item, i) => (
        <Item>
          <IconContainer>
            {item.icon}
          </IconContainer>
          <DetailsContainer>
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </DetailsContainer>
        </Item>
      ))}
    </Container>
  )
}

export default Services