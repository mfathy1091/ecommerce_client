import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import NavLinks from './NavLinks'
import NavButton from './NavButton'

import logo from "../../../assets/logo-2.png"
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi";


const Container = styled.nav`
padding: 0 5%;
  position: sticky;
  top: 0;
  min-height: 70px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  //margin-bottom: -70px;
  z-index: 1000;

  @media(max-width: 768px) {
    
  }
`

const Logo = styled.div`
  height: 70px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  img {
    height: 70%;
    border-radius: 5px;
  }

  @media(max-width: 768px) {
    height: 50px;
    img {
    }
  }

  
`
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  font-family: 'Poppins';
  background-color: white;
    /* height: 100%;
  /* display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px; */
  
  /* text-align: center; */

  @media(max-width: 768px) {
    align-items: flex-start;
    //display: block;
    position: absolute;
    top: 70px;
    left: ${props => props.left};
    width: 100%;
    height: 100vh;
    
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    padding: 10px;
  }
`


const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  return (
    <Container className=''>
      <div
        className='text-3xl md:hidden'
        onClick={() => setOpen(!open)}
      >
        {open ? <MdClose /> : <MdOutlineMenu />}
      </div>

      <Logo>
        <img src={logo} alt="logo" className='md:cursor-pointer' />
      </Logo>

      <MenuList ref={menuRef} left={open ? '0' : '-100%'}>
        <NavLinks />
      </MenuList>
      <div className='md:flex justify-between items-center gap-10'>
        <BiSearch className='text-2xl' />
        {/* <NavButton className='hidden md:visible' /> */}
      </div>
    </Container>
  )
}

export default Navbar2