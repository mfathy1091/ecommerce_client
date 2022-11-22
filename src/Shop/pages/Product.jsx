import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Remove, Add } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import { publicAxios } from '../api'
import { mobile } from "../responsive"
import Services from '../components/Services'
import Footer2 from '../components/Footer2'

const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 10% 10%;
  display: flex;
  ${mobile({
  padding: '10px', flexDirection: 'column'
})}
`

const Left = styled.div`
  margin: 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  
`

const LeftContainer = styled.div`
`

const ImgContainer = styled.div`
  max-width: 550px;
  max-height: 550px;
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

const ThumbContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

`
const Thumb = styled.div`
  height: 50px;
  width: 75px;
  margin: 5px;
`
const ThumbImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Right = styled.div`
  flex: 1;
  margin: 0 20px;
  max-width: 550px;

`

const InfoContainer = styled.div`
  flex: 1;
  ${mobile({
  padding: '10px',
})}
`
const Title = styled.h1`
  font-weight: 600;
  font-size: 42px;
  color: rgb(57, 57, 57);
  margin-bottom: 14px;
`

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: teal;
  margin-bottom: 14px;

`

const Description = styled.p`
  margin-bottom: 28px;
  color: rgb(138, 138, 138);
  font-weight: 500;
  font-size: 15px;
`
const Attribute = styled.div`
  margin-bottom: 7px;
  display: flex;
`

const AttributeName = styled.p`
  margin-right: 8px;
  color: rgb(22, 22, 22);
  font-weight: 600;
  font-size: 15px;
`

const AttributeValue = styled.p`
  color: rgb(86, 86, 86);
  font-weight: 400;
  font-size: 15px;
`
const Separator = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.15);
  margin-bottom: 28px;

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
  background-color: ${props => props.color};
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
  const [product, setProduct] = useState({})
  const [selectedImage, setSelectedImage] = useState()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicAxios.get('/products/' + productId);
        setProduct(res.data)
        setSelectedImage(res.data.images[0])
      } catch (error) {
        console.log(error)
      }
    }

    getProduct();
  }, [])

  return (
    <Container>
      {/* <Navbar /> */}
      <Announcement />
      <Wrapper>
        <Left>
          <LeftContainer>
            <ImgContainer>
              <Image src={selectedImage?.url} />
            </ImgContainer>
            <ThumbContainer>
              {product?.images?.map((image) => {
                return (
                  <Thumb key={image.url}>
                    <ThumbImage src={image.url} onClick={() => setSelectedImage(image)} />
                  </Thumb>
                )

              })}
            </ThumbContainer>
          </LeftContainer>

        </Left>
        <Right>
          <InfoContainer>
            <Title>{product.brandName} - {product.name}</Title>
            <Price>EGP 500</Price>
            <Description>{product.description}</Description>
            {/* <Price>{product.price} EGP</Price> */}

            <Separator />
            <Attribute>
              <AttributeName>BRAND: </AttributeName>
              <AttributeValue>{product.brandName}</AttributeValue>
            </Attribute>
            <Attribute>
              <AttributeName>CATEGORIES: </AttributeName>
              <AttributeValue>{product.categoryName}</AttributeValue>
            </Attribute>
            {product?.attributes?.map((attribute) => {
              return (
                <Attribute key={attribute.attributeName}>
                  <AttributeName>{attribute.attributeName}: </AttributeName>
                  <AttributeValue>{attribute.attributeValueName}</AttributeValue>
                </Attribute>
              )
            })}


            {/* <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color='darkblue' />
                <FilterColor color='gray' />
              </Filter>
            </FilterContainer> */}
            {/* <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer> */}

          </InfoContainer>
        </Right>


      </Wrapper>
      <Services />
      <Footer />
      <Footer2 />
    </Container>
  )
}

export default Product