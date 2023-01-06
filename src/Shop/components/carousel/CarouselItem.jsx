import React from 'react'
import styled from 'styled-components'

const SCarouselItem = styled.div`
  display: inline-block;
  width: 100%;
`

const CarouselItem = ({ slide }) => {
  return (
    <SCarouselItem>
      <img src={slide} />
    </SCarouselItem>
  )
}

export default CarouselItem