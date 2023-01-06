import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'

const SCarousel = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 900px;
`

const SCarouselInner = styled.div`
  white-space: nowrap;
  transition: ease 1s;
`

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0 );
      console.log('hleeee');
    }, 3000)

    return () => clearInterval(slideInterval)
  }, [])

  return (

    <SCarousel>
      <SCarouselInner
        style={{ transform: `translate(${-currentSlide*100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </SCarouselInner>
    </SCarousel>
  )
}

export default Carousel