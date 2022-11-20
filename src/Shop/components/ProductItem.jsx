import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { mobile } from "../responsive"

const Overlay = styled.div`
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

const DetailsContainer = styled.div`
  padding: 24px 20px 40px 20px;

`

const Brand = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight:500;
  color: #666;
  font-family: "Nunito",sans-serif;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Title = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight:400;
  color: #666;
  font-family: "Nunito",sans-serif;
  text-transform: uppercase;
`
const ImageContainer = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  
`
const Image = styled.img`
  /* width: 300px;
  object-fit: cover; */
  /* filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.7)); */
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
  transform-origin: right;
`
const Container = styled(Link)`
  max-width: 400px;
  //min-width: 300px;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  margin: 0 20px 20px 20px;


  /* height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: relative; */
  /* overflow: hidden; */
  /* margin: 20px; */

  /* flex-direction: column; */
  /* align-items: center;
  justify-content: center; */


  &:hover ${Overlay}{
    opacity: 1;
  }

  &:hover ${Image}{
    opacity: 0.7;
    transform: scale(1.05);
  }

  &:hover ${Title}{
    color: #333;
  }
  
  @media(max-width: 768px) {
    max-width: 100%;
  }

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
      <Container to={`/product/${item.id}`}>
        <ImageContainer>
          <Image src={item.image} />
        </ImageContainer>


          <DetailsContainer>
            <Brand>
              {item.brandName}
            </Brand>
            <Title>
            {item.brandName} {item.name}
            </Title>
          </DetailsContainer>
      </Container>
    
  )
}

export default Product