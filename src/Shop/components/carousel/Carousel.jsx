import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'
import CarouselControls from './CarouselControls'
import CarouselIndicators from './CarouselIndicators'

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

const Carousel = ({ slides, interval = 3000, controls = false, indicators = false, autoPlay = true, width = "100%" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer()
    const index = currentSlide > 0 ? currentSlide -1 : slides.length - 1;
    setCurrentSlide(index);
  }

  const next = () => {
    startSlideTimer()
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  }

  const switchIndex = (index) => {
    startSlideTimer()
    setCurrentSlide(index)
  }

  const startSlideTimer = () => {
    if(autoPlay) {
      stopSlideTimer()
      slideInterval.current = setInterval(() => {
        setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
      }, interval)
    }
  }

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer()
  }, [])

  return (

    <SCarousel style={{ maxWidth: width }}>
      <SCarouselInner
        style={{ transform: `translate(${-currentSlide*100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem key={index} slide={slide} stopSlide={stopSlideTimer} startSlide={startSlideTimer} />
        ))}
      </SCarouselInner>
      {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
      {controls && <CarouselControls prev={prev} next={next} />}
    </SCarousel>
  )
}

export default Carousel