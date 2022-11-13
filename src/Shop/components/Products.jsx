import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ProductItem from './ProductItem'
import { publicAxios } from '../api'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
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