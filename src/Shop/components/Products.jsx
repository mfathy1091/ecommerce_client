import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ProductItem from './Product'
import { publicAxios } from '../api'

const Container = styled.div`
  /* width: 1200px; */
  /* height: 100vh; */
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px 5%;
`
const Products = ({ catSlug, filters, sort }) => {
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


  return (
    <Container>
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products