import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { mobile } from "../responsive"
import { publicAxios } from '../api'


const Container = styled.div`
  display: flex;
  width: 100%;
  ${mobile({
    flexDirection: 'column'
  })}
`

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicAxios.get('/categories');
        setCategories(res.data);
      } catch (err) {
        
      }
    }

    getCategories()
  }, [])



  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  )
}

export default Categories