import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { mobile } from "../responsive"
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa'
import Dropdown from './Dropdown'

import { MdClose, MdOutlineMenu } from "react-icons/md";
import { BiWindowOpen } from 'react-icons/bi'
const Container = styled.div`
  position: sticky;
  top: 0;
  min-height: 70px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2% 0 2%;
  margin-bottom: -70px;
  z-index: 999;
`



const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
  display: 'none'
})}
`

const SearchContainer = styled.div`
  margin-left: 25px;
  padding: 5px;
  ${mobile({
  marginLeft: '10px'
})}
`


const NavList = styled.ul`
  list-style: none;
  /* height: 100%;
  /* display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px; */
  
  /* text-align: center; */
  /* justify-content: space-between;
  align-items: center; */
  
  @media(max-width: 768px) {
    position: absolute;
    top: 0;
    left: ${props => props.left};
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 1);
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    padding: 10px;
  }
`

const SubNavList = styled(NavList)`
  position: absolute;
  left: 0;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.85);

  display: none;

  @media(max-width: 768px) {
    position: relative;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 0;
  }
`

const NavItem = styled.li`
  position: relative;
  float: left;

  &:hover > ${SubNavList}{
    display: initial;
  }

  &:focus-within > ${SubNavList}{
    display: initial;
  }

  @media(max-width: 768px) {
    position: relative;
    white-space: nowrap;
    width: 100%;
  }
`

const SubNavItem = styled.li`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.85);

  @media(max-width: 768px) {
    border: none;
    padding-left: 30px;
  }
`



const NavLink = styled(Link)`
  box-sizing: border-box;
  /* height: 100%; */
  padding: 24px;
  color: rgb(200, 200, 200);
  display: block;
  justify-content: start;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;


  &:hover {
    color: teal;
  }

  @media(max-width: 768px) {
    padding: 8px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    transition: all 0.3s ease-out;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);

    &:hover {
      transition: all 0.2s ease-out;
      background-color: #efefef39;
    }
  }
`

const SubNavLink = styled(NavLink)`
  @media(max-width: 768px) {
    border: none;
    font-size: 14px;
    font-weight: 300;
  }
`

const LogoLink = styled(Link)`
  font-family: 'Montserrat';
  font-size: 26px;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  color: rgb(220, 220, 220);
  transition: all 0.3s ease;
  justify-self: start;
  
  &:hover {
    color: teal;
  }

  @media(max-width: 768px) {
    transform: scale(75%);
  }

`




const MenuShowBtn = styled.div`
font-weight: 200;
  color: #333;
  display: none;
  font-size: 32px;
  cursor: pointer;
  padding: 10px;

  @media(max-width: 768px) {
    display: block;
  }
`

const MenuCloseBtn = styled.div`
  font-weight: 200;
  color: #333;
  display: none;
  font-size: 32px;
  cursor: pointer;margin-bottom: 12px;

  @media(max-width: 768px) {
    display: block;
  }
`

const Navbar = ({ links, scrollFunc, contactRef }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef();

  const handleScrollToRef = (refElement) => {
    scrollFunc(refElement);
    closeMobileMenu();
  }

  const toggleMenu = () => {
    // menuRef.current.classList.toggle('responsive_nav')
    setShowMenu(prev => !prev)
    console.log(showMenu);
  }

  const closeMobileMenu = () => {
    setShowMenu(false)
  }

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <Container>

      <LogoLink to="/" onClick={closeMobileMenu} >
        LED SYSTEMS
      </LogoLink>
      <NavList ref={menuRef} left={showMenu ? '0' : '-100%'}>
        {showMenu &&
          <MenuCloseBtn>
            <MdClose onClick={closeMobileMenu} />
          </MenuCloseBtn>
        }
        <NavItem>
          <NavLink onClick={() => handleScrollToRef(contactRef)} className="link" to="">
            Contact
          </NavLink>
        </NavItem>

        {/* <img class="product__img img-lazyload js lazyautosizes lazyloaded" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512]" data-sizes="auto" alt="" data-srcset="
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_180x.jpg?v=1611855963 180w, 
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_360x.jpg?v=1611855963 360w, 
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_540x.jpg?v=1611855963 540w, 
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_720x.jpg?v=1611855963 720w, 
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_900x.jpg?v=1611855963 900w, 
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_1080x.jpg?v=1611855963 1080w, 
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_1296x.jpg?v=1611855963 1296w, 
        //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_1512x.jpg?v=1611855963 1512w" 
        
        sizes="370px" srcset="//cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_180x.jpg?v=1611855963 180w, //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_360x.jpg?v=1611855963 360w, //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_540x.jpg?v=1611855963 540w, //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_720x.jpg?v=1611855963 720w, //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_900x.jpg?v=1611855963 900w, //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_1080x.jpg?v=1611855963 1080w, //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_1296x.jpg?v=1611855963 1296w, //cdn.shopify.com/s/files/1/0358/3593/6906/products/PLDD371_807_P02_1512x.jpg?v=1611855963 1512w"> */}

        {links.map((item) => {
          return (
            <NavItem key={item.label}>
              <NavLink to={item.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
                {item?.links && ' +'}
              </NavLink>
              {/* {item?.links && dropdown && <Dropdown items={item.links} />} */}
              {item?.links &&
                <SubNavList>
                  {item?.links.map((subItem) => {
                    return (
                      <SubNavItem key={subItem.label}>
                        <SubNavLink to={subItem.url}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {subItem.label}
                          {subItem?.links && <FaCaretDown />}
                        </SubNavLink>
                      </SubNavItem>
                    )
                  })}
                </SubNavList>
              }
            </NavItem>
          );
        })}

      </NavList>

      {/* <Language>EN</Language>
      <SearchContainer>
        <Search style={{ color: 'gray', fontSize: 16 }} />
      </SearchContainer>
      <Link to={`/login`}>
        <NavItem>SIGN IN</NavItem>
      </Link>
      <Link to={`/admin`}>
        <NavItem>Admin</NavItem>
      </Link>
      <Link to={`/cart`}>
        <NavItem>
          <Badge badgeContent={4} color="success">
            <ShoppingCartOutlined />
          </Badge>
        </NavItem>
      </Link> */}
      <MenuShowBtn onClick={toggleMenu}>
        {!showMenu && <MdOutlineMenu />}
      </MenuShowBtn>

    </Container>
  )
}

export default Navbar