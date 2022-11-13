import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  margin: 0 0 24px 0;
`

const Category = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: gray;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: rgb(15, 23, 42);
`
const PageHeader = ({ category, title }) => {
  return (
    <Container>
      <Category>{category}</Category>
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default PageHeader