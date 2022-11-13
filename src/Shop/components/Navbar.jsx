import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { mobile } from "../responsive"

const Container = styled.div`
  height: 60px;
  ${mobile({
  height: '50px'
})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
  padding: '10px 0'
})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
  display: 'none'
})}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
  marginLeft: '10px'
})}
`

const Input = styled.input`
  border: none;
  ${mobile({
  width: '50px'
})}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-family: 'Montserrat';
  font-size: 32px;
  font-weight: 800;
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  transition: all 0.3s ease;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  ${mobile({
  fontSize: '24px'
})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
  justifyContent: 'center'
})}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
  fontSize: '12px',
  marginLeft: "10px"
})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: 'none' }} >
            <Logo>CARERA</Logo>
          </Link>
        </Center>
        <Right>
          <Link to={`/login`}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to={`/admin`}>
            <MenuItem>Admin</MenuItem>
          </Link>
          <Link to={`/cart`}>
            <MenuItem>
              <Badge badgeContent={4} color="success">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar