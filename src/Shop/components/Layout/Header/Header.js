import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from '../../../../app/slices/uiSlice';
import logo from "../../../../assets/logo-2.png"
import MobileNav from './MobileMenu/MobileMenu';
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
  SMenu,
  SMenuIcon,
  SMenuToggleButton,
  SRight,
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
            <Nav/>
          </SCenter>
          <SRight>
            <SCTAButton>Sign In</SCTAButton>
            <SSearchIcon />
          </SRight>
        </SHeader>
      </SHeaderFixed>
      <SMenu style={menuOpen ? { left: 0 } : {}}>
        <Nav menuToggleHandler={menuToggleHandler} />
      </SMenu>
    </>
  )
}

export default Header