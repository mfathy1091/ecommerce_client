import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Remove, Add } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import { publicAxios } from '../api'
import { mobile } from "../responsive"

const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: '10px', flexDirection: 'column'
  })}
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  ${mobile({
    height: 'auto',
    maxHeight: '40vh'
  })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: '10px',
  })}
`
const Title = styled.h1`
  font-weight: 200;
  font-size: 32px;
`
const Description = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
  ${mobile({
    width: '100%',
  })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0 5px;
  cursor: pointer;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  ${mobile({
    width: '100%',
  })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: #f8f4f4;
  }
`



const Product = () => {
  const { productId } = useParams();
  const [product, setProduct]  = useState({})

  useEffect( () => {
    const getProduct = async () => {
      try {
        const res = await publicAxios.get('/products/'+productId);
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProduct();
  }, [])

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.brandName} - {product.name}</Title>
          <Description>{product.description}</Description>
          {/* <Price>{product.price} EGP</Price> */}
          <Price>500 EGP</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* {product.colors.map((color) => (
                <FilterColor color={color} key={color}/>
              ))} */}
              <FilterColor color="black" />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product