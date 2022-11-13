import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { mobile } from "../responsive"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  ${mobile({
    display: 'none'
  })}
`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  width: auto;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
  ${mobile({
    height: '20vh',
    width: '40vw',
    minWidth: '50wh',
  })}
`



const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: contain;
  ${mobile({
    
  })}
`



const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
      <Container>
          <Image src={item.image} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
      </Container>
    </Link>
  )
}

export default Product