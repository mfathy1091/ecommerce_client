import React from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'

const SCarousel = styled.div`

`

const SCarouselInner = styled.div`
  
`

const Carousel = ({ slides }) => {
  return (

    <SCarousel>
      <SCarouselInner>
        {slides.map((slide, index) => (
          <CarouselItem  slide={slide} key={index} />
        ))}
      </SCarouselInner>
    </SCarousel>
  )
}

export default Carousel