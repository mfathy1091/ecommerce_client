import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from './ProductItem'
import { publicAxios } from '../api'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  
`
const ContainerTitle = styled.div`
  margin: 20px;
`

const Title = styled.h1`
    display: inline-block;
    margin-bottom: 0;
    color: teal;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    position:relative;

  &:before{
    position: absolute;
    top: 50%;
    right: -60px;
    content: '';
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 50px;
    height: 1px;
    background: teal;
  }

  &:after{
    position: absolute;
    top: 50%;
    left: -60px;
    content: '';
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 50px;
    height: 1px;
    background: teal;
  }
`

const StyledCarousel = styled(Carousel)`
  width: 100%;
  ul {
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const ProductSlider = ({catSlug , title}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicAxios.get(`/products${catSlug ? `?categorySlug=${catSlug}` : ''}`);
        setProducts(res.data);
      } catch (err) {
        
      }
    }

    getProducts()
  }, [catSlug])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>
          {title}
        </Title>
      </ContainerTitle>
      <StyledCarousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customRightArrow={<CustomRightArrow />}
      >
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
      </StyledCarousel>
    </Container>
  )
}

export default ProductSlider