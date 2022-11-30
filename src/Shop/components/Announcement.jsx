import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 40px;
  background-color: #000;
  color: #d7d7d7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media(max-width: 768px) {
    font-size: 10px;
  }
`
  
const Announcement = () => {
  return (
    <Container>
      White Friday | Up to 30% off
    </Container>
  )
}

export default Announcement