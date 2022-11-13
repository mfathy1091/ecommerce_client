import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems } from '../data'
import { mobile } from "../responsive"
import { useEffect } from 'react'

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
    height: 'auto',
    maxHeight: '30vh'
  })}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  &:hover{
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const SlideShowContainer = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
  
`

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${props=>props.bg};
`


const Image = styled.img`
  width:100%;
  object-fit: contain;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const lastIndex = sliderItems.length-1
  let timer
  const runTimer = () => {
    timer = setTimeout(()=>{
      setSlideIndex(slideIndex < lastIndex ? slideIndex+1 : 0)
    }, 4000)
  }

  const handleClick = (direction) => {    
    
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : lastIndex)
    }else{
      setSlideIndex(slideIndex < lastIndex ? slideIndex+1 : 0)
    }
    
    
  }

  useEffect(() => {
    runTimer();
  })

  return (
    <Container>
      <Arrow direction='left' onClick={()=>{}}>
        <ArrowLeftOutlined />
      </Arrow >
      <SlideShowContainer slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id} >
            <Image src={item.img}/>
          </Slide>
        ))}
      </SlideShowContainer>
      <Arrow direction='right' onClick={()=>{}}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider