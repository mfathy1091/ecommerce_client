import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'
import CarouselControls from './CarouselControls'

const SCarousel = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  /* max-width: 1200px; */
`

const SCarouselInner = styled.div`
  white-space: nowrap;
  transition: ease 1s;
`

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide -1 : slides.length - 1;
    setCurrentSlide(index);
  }

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  }

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0 );
  //     console.log('hleeee');
  //   }, 3000)

  //   return () => clearInterval(slideInterval)
  // }, [])

  return (

    <SCarousel>
      <SCarouselInner
        style={{ transform: `translate(${-currentSlide*100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </SCarouselInner>
      <CarouselControls prev={prev} next={next} />
    </SCarousel>
  )
}

export default Carousel