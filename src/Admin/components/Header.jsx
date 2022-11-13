import React from 'react'
import styled from 'styled-components'
const Container = styled.h1`
  font-size: 24px;
  margin: 0 0 30px 0;
  font-weight: 300;
`

const Header = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Header