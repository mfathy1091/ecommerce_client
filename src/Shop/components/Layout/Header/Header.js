import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from '../../../../app/slices/uiSlice';
import logo from "../../../../assets/images/logo/logo-black.png"
import MobileNav from './MobileMenu/MobileMenu';
import NavLinks from './NavLinks/NavLinks'
import Nav from './Nav/Nav';

import {
  SCenterLeft,
  SCenterRight,
  SCenter,
  SSearchIcon,
  SCloseIcon,
  SCTAButton,
  SHeader,
  SHeaderFixed,
  SHeaderHeight,
  SLeft,
  SLogoLinkLeft,
  SLogoLinkCenter,
  SMobileMenu,
  SMenuIcon,
  SMenuToggleButton,
  SRight,
  SMenu
} from "./styles";

const Header = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);

  const menuToggleHandler = () => {
    dispatch(uiActions.menuToggle());
  };
  const menuCloseHandler = () => {
    if (menuOpen) dispatch(uiActions.menuClose());
  };

  return (
    <>
      <SHeaderHeight />
      <SHeaderFixed>
        <SHeader>
          <SLeft>
            <SMenuToggleButton onClick={menuToggleHandler}>
              {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
            </SMenuToggleButton>
            <SLogoLinkLeft to="/" onClick={menuCloseHandler}>
              <img src={logo} alt="logo" />
            </SLogoLinkLeft>
          </SLeft>
          <SCenter>
            <SLogoLinkCenter to="/" onClick={menuCloseHandler}>
              <img src={logo} alt="logo" />
            </SLogoLinkCenter>
            <SMenu>
              <NavLinks />
            </SMenu>
          </SCenter>
          <SRight>
            <SSearchIcon />
          </SRight>
        </SHeader>
      </SHeaderFixed>
      <SMobileMenu style={menuOpen ? { left: 0 } : {}}>
        <SMenuToggleButton onClick={menuToggleHandler}>
          <SCloseIcon />
        </SMenuToggleButton>
        <Nav menuToggleHandler={menuToggleHandler} />
      </SMobileMenu>
    </>
  )
}

export default Header