import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavButton from './NavButton'
import NavLinks from './NavLinks'
// import logo from "../../assets/logo.png"
import { MdClose, MdOutlineMenu } from "react-icons/md";

const LogoLink = styled(Link)`
  font-family: 'Montserrat';
  font-size: 26px;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  color: rgb(58, 58, 58);
  transition: all 0.3s ease;
  justify-self: start;
  

  @media(max-width: 768px) {
    transform: scale(75%);
  }
`

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
          {/* <img src={logo} alt="logo" className='md:cursor-pointer h-9'/> */}
          <LogoLink to="/" className='md:cursor-pointer h-9'
          // onClick={closeMobileMenu} 
          >
            CARERA
          </LogoLink>
          <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            {open ? <MdClose /> : <MdOutlineMenu /> }
          </div>
        </div>


        <ul className="md:flex hidden uppercase items-center gap-8 font-['Poppins']">
          <li>
            <Link to="/" className='uppercase py-7 px-3 inline-block' >
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className='md:block hidden'>
          <NavButton />
        </div>
        { /* Mobile nav */}
        <ul 
          className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
          duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
          <li>
            <Link to="/" className='py-7 px-3 inline-block' >
              Home
            </Link>

          </li>
          <NavLinks />
          <div className='py-5'>
            <NavButton />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar2