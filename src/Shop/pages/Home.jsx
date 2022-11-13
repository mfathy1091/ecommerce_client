import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import image1 from './../../assets/10_client_background.png'
import image2 from './../../assets/12_client_background.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`
const Cell = styled.div`
  background-color: #f7f7f7;
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
 @media (max-width: 768px){
  flex-direction: column;
  ${Cell} {
    min-width: 100vw;
  }
 }
`





const Image = styled.img`
  width: 100%;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
`
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  line-height: 27px;
  text-align: center;
  margin: 30px 0;
  @media(max-width: 768px) {
    margin: 10px 0;
  }
`

const Link = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: white;
    border-radius: 8px;
    background-color: teal;
    padding: 8px;
    text-decoration: none;
  }
`

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Container>
        <Row>
          <Cell>
            <Details>
              <Title>Eyeglases</Title>
              <Paragraph>
                Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.
              </Paragraph>
              <Link>SHOP GLASSES</Link>
            </Details>
          </Cell>
          <Cell>
            <Image src={image1}></Image>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Image src={image2}></Image>
          </Cell>
          <Cell>
            <Details>
              <Title>Sunglasses</Title>
              <Paragraph>
                Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.
              </Paragraph>
              <Link>SHOP GLASSES</Link>
            </Details>
          </Cell>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Home