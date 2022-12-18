import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { v, b } from "../../../styles/variables";

import { FaReact } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const btnReset = css`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  padding: 0;
`;



export const SHeaderHeight = styled.div`
`;

export const SHeaderFixed = styled.div`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  height: ${v.headerHeight};
  background: ${({ theme }) => theme.bg};
  z-index: 1000;
`;

export const SHeader = styled.header`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  transition: 0.3s ease padding;
  padding: 0 ${v.mdSpacing};
  @media ${b.lg} {
    padding: 0 ${v.lgSpacing};
  }
  > div {
    flex: 1;
  }
`;

export const SLeft1 = styled.div`
  display: none;
  @media ${b.md} {
    display: flex;
  }
`;

export const SCenterLeft = styled.div`
  display: none;
`;

export const SCenterRight = styled.div`
  display: none;
  @media ${b.md} {
    display: flex;
  }
`;




export const SLeft = styled.div`
display: flex;
`;
export const SCenter = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  Nav {
    display: none;
    @media ${b.md} {
      display: flex;
    }
  }

`;
export const SRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// Left

export const SLogoLinkLeft = styled(Link)`
  display: none;
  @media ${b.md} {
    display: flex;
    height: 40px;
    color: inherit;
    text-decoration: none;
    img {
      display: block;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const SLogoLinkCenter = styled(Link)`
  display: flex;
  height: 35px;
  color: inherit;
  text-decoration: none;

  img {
    display: block;
    height: 100%;
    object-fit: contain;
  }
  @media ${b.md} {
    display: none;
  }
`;

// Center
// nav

// Right

export const SMenuToggleButton = styled.button`
  ${btnReset}
  width: 32px;
  position: relative;
  z-index: 100;
  @media ${b.md} {
      display: none;
  }
`;

const iconStyles = css`
  display: block;
  width: 28px;
  height: 28px;
`;
export const SSearchIcon = styled(BiSearch)`
  ${iconStyles}
`;

export const SMenuIcon = styled(HiMenuAlt2)`
  ${iconStyles}
`;

export const SCloseIcon = styled(IoMdClose)`
  ${iconStyles}
  color: white;
  margin: 16px;
`;

// Menu
export const SMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  right: 0;
  bottom: 0;
  background: #e7887b;
  width: 100%;
  height: calc(100% - ${v.headerHeight});
  transition: 0.3s ease left;
  z-index: 1000;
  @media ${b.md} {
    display: none;
  }
`;

export const SMenu = styled.div`
  display: none;
  @media ${b.md} {
    display: initial;
  }
`