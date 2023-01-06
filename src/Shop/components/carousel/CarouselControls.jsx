import React from 'react'
import styled, { css } from 'styled-components'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const SCrouselControl = css`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

`
const SCarouselControlLeft = styled.button`
  ${SCrouselControl}
  left: 20px;
`
const SCarouselControlRight = styled.button`
  ${SCrouselControl}
  right: 20px;
`

const SChevronLeftIcon = styled(BsArrowLeft)`
  font-size: 24px;
`

const SChevronRightIcon = styled(BsArrowRight)`
  font-size: 24px;
`

const CarouselControls = ({ prev, next }) => {
  return (
    <div>
      <SCarouselControlLeft onClick={prev}>
        <SChevronLeftIcon />
      </SCarouselControlLeft>
      <SCarouselControlRight onClick={next}>
        <SChevronRightIcon />
      </SCarouselControlRight>
    </div>
  )
}

export default CarouselControls