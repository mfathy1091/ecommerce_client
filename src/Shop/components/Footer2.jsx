import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f2f2f2;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #999;
  padding-left: 20px;
`

const Footer2 = () => {
  return (
    <Container>
      © Copyright Carera Vision Optics - All Rights Reserved
    </Container>
  )
}

export default Footer2