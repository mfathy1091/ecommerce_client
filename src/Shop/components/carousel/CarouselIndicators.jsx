import React from 'react'
import styled from 'styled-components'

const SCarouselIndicators = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
`
const SCarouselIndicatorItem = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background: #fff;
  opacity: ${(props) => props.active == 1 ? 1 : 0.5 };
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
`

const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <SCarouselIndicators>
      {slides.map((_, index) => (
        <SCarouselIndicatorItem key={index} 
          active={`${currentIndex === index ? 1 : 0 }`}
          onClick={() => switchIndex(index)}
        />
      ))}
    </SCarouselIndicators>
  )
}

export default CarouselIndicators