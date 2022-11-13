import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from "../responsive"

const Image = styled.img`
  object-fit: contain;
  width: 100;
`

const Container = styled.div`
  flex: 1;
  position: relative;
  width: 25%;
  background-color: black;

  @media (max-width: 768px) {
    width: 100%;
  }
  ${Image}:hover {
    transform: scale(1.05);
  }

`



const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 5px;
  font-weight: 600;
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.slug}`}>
        <Image src={item.image} />
        <Info>
          <Title>{item.name}</Title>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem