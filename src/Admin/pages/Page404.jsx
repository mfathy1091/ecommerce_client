import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  /* background-color: var(--bg-main-dark-bg); */
  background-color: #f2f1f2;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
  /* background-color: var(--bg-main-dark-bg); */
  font-size: 36px;
  font-weight: 500;
`


const Paragraph = styled.span`
  /* background-color: var(--bg-main-dark-bg); */
  font-size: 20px;
  font-weight: 200;
  margin: 20px 0;
`

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>404</Title>
      <Paragraph>Page Not Found</Paragraph>
      <Button 
          onClick={() => {navigate('/admin')}}
          className='btn btn-primary btn-md'
        >
          Go Home
        </Button>
    </Container>
)
}

export default Page404