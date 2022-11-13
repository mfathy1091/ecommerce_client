import React from 'react'
import './loader.css'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0turn);
  }
  100% {
    transform: rotate(1turn);
  }
`

const Container = styled.div`
  pointer-events: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #${props=>props.color};
  animation: ${rotate} 0.8s ease infinite;
`



const Loader = ({color}) => {
  return (
    <Container
      color={color}
    >

    </Container>
  )
}

export default Loader