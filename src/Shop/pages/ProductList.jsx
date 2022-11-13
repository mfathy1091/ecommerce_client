import React, {useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { colors, frameMaterials, frameShapes, frameTypes, frameBrands } from '../data'
import { useLocation } from 'react-router-dom'
import { mobile } from "../responsive"

const Container = styled.div`

`

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column'
  })}
`

const Filter = styled.div`
  margin: 20px;

`

const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: '0'
  })}
`

const SelectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
  ${mobile({
    justifyContent: 'spaceBetween'
  })}
`

const Select = styled.select`
  padding: 10px;

  ${mobile({
    width: '49%', padding: '5px'
  })}
`

const Option = styled.option`
  
`

const ProductList = () => {
  const location = useLocation();
  const catSlug = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filters,
      [name]: value,
    })
  }
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Frames</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <SelectsContainer>
            <Select name="color" onChange={handleFilters}>
              <Option disabled >Color</Option>
              {colors.map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </Select>
            <Select namee="material" onChange={handleFilters}>
              <Option disabled nam>Material</Option>
              {frameMaterials.map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </Select>
            <Select name="shape" onChange={handleFilters}>
              <Option disabled >Shape</Option>
              {frameShapes.map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </Select>
            <Select name="type" onChange={handleFilters}>
              <Option disabled>Type</Option>
              {frameTypes.map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </Select>
            
            <Select name="brand" onChange={handleFilters}>
              <Option disabled >Brand</Option>
              {frameBrands.map((item) => (
                <Option key={item.id}>{item.name}</Option>
              ))}
            </Select>
          </SelectsContainer>
          
        </Filter>
        <Filter>  
          <FilterText>Sort Products: </FilterText>
          <SelectsContainer>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </SelectsContainer>
        </Filter>
      </FilterContainer>
      <Products catSlug={catSlug} filters={filters} sort={sort} />
      <Footer />
    </Container>
  )
}

export default ProductList
