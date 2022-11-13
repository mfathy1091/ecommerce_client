import React from 'react'
import styled from 'styled-components'
import background from "../images/login_background.jpg"
import { mobile } from "../responsive"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)
    ), 
    url(${background})
  ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;

  ${mobile({
  width: '75%'
})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0;
`


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`

const FooterLink = styled.span`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>
              LOGIN
            </Button>

            <FooterLink>FORGOT YOUR PASSWORD?</FooterLink>
            <Link to={'/register'}>
              <FooterLink >CREATE A NEW ACCOUNT</FooterLink>
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </div>

  )
}

export default Login