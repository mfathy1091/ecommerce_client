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
  justify-content: center;

  padding: 10% 10%;
  display: flex;
  ${mobile({
  padding: '10px', flexDirection: 'column'
})}
`



const ImagesContainer = styled.div`
  max-width: 500px;
  flex: 1;
  margin: 25px;
`

const BigImage = styled.div`
  max-width: 100%;
  min-width: 290px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
    display: block;
    ${mobile({
    height: 'auto',
    maxHeight: '40vh'
    })}
  }
`


const ThumbsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

`

const ThumbImage = styled.img`
  object-fit: cover;
  width: 90px;
  height: 100%;
  display: block;
  margin: 5px;
  border: 1px solid  ${props=> props.active ? 'lightseagreen' : '#ddd'};
  /* opacity:${props=> props.active ? '1' : '0.7'}; */
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`


const DetailsContainer = styled.div`
  margin: 25px;

  flex: 1;
  max-width: 500px;
  ${mobile({
  padding: '10px',
})}
`
const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 32px;
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



const ProductDetails = () => {
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
          <ImagesContainer>
            <BigImage>
              <img src={selectedImage?.url} />
            </BigImage>
            <ThumbsContainer>
              {product?.images?.map((image, i) => {
                return (
                    <ThumbImage 
                      key={i} 
                      src={image.url} 
                      onClick={() => setSelectedImage(image)} 
                      active={image.url === selectedImage.url}
                    />
                )

              })}
            </ThumbsContainer>
          </ImagesContainer>

          <DetailsContainer>
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
            {product?.attributes?.map((attribute, i) => {
              return (
                <Attribute key={i}>
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

          </DetailsContainer>


      </Wrapper>
      <Services />
      <Footer />
      <Footer2 />
    </Container>
  )
}

export default ProductDetails