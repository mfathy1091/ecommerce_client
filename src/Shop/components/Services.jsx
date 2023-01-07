import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaShare, FaWrench } from 'react-icons/fa'


import { BsTruck } from 'react-icons/bs'
import { BiCustomize } from 'react-icons/bi'

const Container = styled.ul`
  padding: 35px 15px;
  position: relative;
  background-color: #f2f2f2;
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
  padding: 20px;
  width: 100%;

}
`


const IconContainer = styled.div`
height: 70px;
width: 70px;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 768px) {
}
svg {
  font-size: 40px;
  color: rgba(0, 0, 0, 0.8);
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
  color: rgb(0, 0, 0);
  margin-bottom: 3px;
  letter-spacing: 0.5px;
`
const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  line-height: 27px;
`


const Services = () => {

  const items = [
    {
      title: "Free Shipment for orders over $200",
      subtitle: "*Conditions apply",
      icon: <BsTruck />
    },
    {
      title: "CUSTOMISED SERVICE APPROACH",
      subtitle: "We make right away",
      icon: <BiCustomize />
    },
    {
      title: "14 DAYS RETURN",
      subtitle: "*Conditions apply",
      icon: <FaShare />
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