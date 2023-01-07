import React, { useRef } from 'react'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Slider3 from '../components/Slider3'
import Services from '../components/Services'
import ProductSlider from '../components/ProductSlider'
import PartnersSlider from '../components/PartnersSlider'
import Categories from '../components/Categories'
import Carousel from '../components/carousel/Carousel'
import { heroSlide1, heroSlide2, heroSlide3, heroSlide4 } from '../../assets/images'
import { fadingSlide1, fadingSlide2 } from '../../assets/images'

const Container = styled.div`
  
`


const Home = () => {
  const slides = [
    heroSlide1,
    heroSlide2,
    heroSlide3,
    heroSlide4
  ]

  const contactRef = useRef(null);



  const scrollToRef = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Container>
        <Carousel 
          slides={slides} 
          interval={3000}
          controls
          indicators
          autoPlay = {true}
        />
      </Container>



      {/* <button onClick={() => scrollToRef(contactRef)}>Contact</button> */}
      {/* <Navbar 
        links={navbarLinks} 
        scrollFunc={scrollToRef} 
        contactRef={contactRef} 
      /> */}
      {/* <HeroSection/> */}
      <Categories/>

      <ProductSlider catSlug={'Featured Products'} title={'FEATURED PRODUCTS'} />

      <Slider3 
        imageSrc={fadingSlide1} 
        title={'Outdoor LED Display Solutions'} 
        subtitle={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.'} 
        url={'/products/outdoor'}
      />
      
      <Slider3 
        imageSrc={fadingSlide2} 
        title={"Curved or Flat Digital LED Displays"} 
        subtitle={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.'} 
        flipped={true} 
        url={'/curved'}
      />

      <Services />
      <PartnersSlider />

      <Footer ref={contactRef} />
    </div>
  )
}

export default Home