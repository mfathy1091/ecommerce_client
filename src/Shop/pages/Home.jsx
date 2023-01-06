import React, { useRef } from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import image1 from './../../assets/10_client_background.png'
import image2 from './../../assets/12_client_background.jpg'
import HeroSection from '../components/HeroSection'
import Slider2 from '../components/Slider2'
import { BsWindowSidebar } from 'react-icons/bs'
import Locations from '../components/Locations'
import Slider3 from '../components/Slider3'
import Services from '../components/Services'
import insuranceCompanies from '../images/insurance_companies.png'
import ProductSlider from '../components/ProductSlider'
import PartnersSlider from '../components/PartnersSlider'
import Navbar2 from '../components/Navbar2/Navbar2'
import Categories2 from '../components/Categories2'
import { Slideshow } from '@material-ui/icons'
import Carousel from '../components/carousel/Carousel'

const Container = styled.div`
  
`


const Home = () => {
  const slides = [
    "/images/hero_slider/1.jpg",
    "/images/hero_slider/2.jpg",
    "/images/hero_slider/3.jpg",
    "/images/hero_slider/4.jpg",
  ]

  const contactRef = useRef(null);

  const navbarLinks = [
    { 
      url: '/',
      label:'Home' 
    }, 
    { 
      url: '', 
      label: 'Sunglasses',
      links : [
        { url: '/products/eyeglasses/Men', label: 'Men', className: 'dropdown-link'  },
        { url: '/products/eyeglasses/Women', label: 'Women', className: 'dropdown-link' },
      ]
    },
    {
      url: '/products/eyeglasses', 
      label: 'Eyeglasses' 
    },
  ]

  const navbarBtns = [
    { 
      ref: contactRef,
      label: 'Contact', 
    },
  ]

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
      {/* <Announcement /> */}
      {/* <Navbar2 /> */}
      {/* <Navbar 
        links={navbarLinks} 
        scrollFunc={scrollToRef} 
        contactRef={contactRef} 
      /> */}
      {/* <HeroSection/> */}
      <Categories2/>
      <PartnersSlider />
      <Slider3 
        imageSrc='/images/img-home-11.jpg' 
        title={'TRENDY WOMEN’S SUNGLASSES'} 
        subtitle={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.'} 
        url={'/products/sunglasses/women'}
      />
      <Slider3 
        imageSrc='/images/img-home-12.jpg' 
        title={"MEN'S EYEWARE"} 
        subtitle={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.'} 
        flipped={true} 
        url={'/products/eyeglasses'}
      />
      <ProductSlider catSlug={'sunglasses'} title={'SUNGLASSES'} />
      <ProductSlider catSlug={'eyeglasses'} title={'EYEGLASSES'} />

      {/* <Products catSlug={'sunglasses'} filters={[]} sort={[]} /> */}


      {/* <Slider /> */}
      {/* <Categories /> */}
      <Locations />

      <Services />
      <Footer ref={contactRef} />
    </div>
  )
}

export default Home