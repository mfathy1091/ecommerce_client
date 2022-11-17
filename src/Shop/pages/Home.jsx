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
import ImageSection from '../components/ImageSection'
import Slider2 from '../components/Slider2'
import { BsWindowSidebar } from 'react-icons/bs'
import Locations from '../components/Locations'
import Slider3 from '../components/Slider3'
import Services from '../components/Services'
import Footer2 from '../components/Footer2'

const Cell = styled.div`
  background-color: #f2f2f2;
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



const Home = () => {
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
      {/* <button onClick={() => scrollToRef(contactRef)}>Contact</button> */}
      <Announcement />
      <Navbar 
        links={navbarLinks} 
        scrollFunc={scrollToRef} 
        contactRef={contactRef} 
      />
      <ImageSection id='home'/>
      <Slider3 
        imageSrc='/images/img-home-11.jpg' 
        title={'TRENDY WOMEN’S SUNGLASSES'} 
        subtitle={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.'} 
        url={'/products/sunglasses/women'}
      />
      <Products catSlug={'sunglasses'} filters={[]} sort={[]} />

      <Slider3 
        imageSrc='/images/img-home-12.jpg' 
        title={"MEN'S EYEWARE"} 
        subtitle={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat, ut wisi enim ad minim veniam, quis nostrud.'} 
        flipped={true} 
        url={'/products/eyeglasses'}
      />
      <Products catSlug={'eyeglasses'} filters={[]} sort={[]} />

    
      <Slider />
      <Categories />
      <Services />
      <Locations />
      <Footer ref={contactRef} />
      <Footer2 />
    </div>
  )
}

export default Home