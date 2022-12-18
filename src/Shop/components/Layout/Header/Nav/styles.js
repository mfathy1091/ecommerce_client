import { Link } from "react-router-dom";
import styled from "styled-components";

import { v, b } from "../../../../styles/variables";

export const SNav = styled.nav`
  width: auto;
  background: #e7887b;
  padding: 0;
  border-radius: ${v.borderRadius};
  @media ${b.md} {
    background: none;
    height: 100%;
    display: flex;
  }
`;

export const SNavLinkContainer = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
  justify-content: space-between;
  :not(:last-of-type) {
    border-bottom: 1px solid #d27c70;

  }

  @media ${b.md} {
    display: flex;
    align-items: center;
    :not(:last-of-type) {
      margin-bottom: 0;
      margin-right: ${v.mdSpacing};
    }
  }
`;

export const SNavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  :hover {
    color: var(--primary-color);
    font-weight: 500;
    transition: all 0.3s ease;
  }
`;


export const SDropDownButton = styled.button`
  position: relative;
  width: 20px;
  height: 20px;

  &:before,
  &:after{
    content: "";
    position: absolute;
    background-color: white;
    transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before{
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "none")};
  }

  /* horizontal line */
  &:after{
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -1px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "none")};

  }
`

export const SNavLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #fff;
  padding: 16px;

`;

export const SNavLabel = styled.span`
  /* color: ${({ isOpen, theme }) => (!isOpen ? "inherit" : theme.primary)}; */
  font-weight: ${({ isOpen }) => ( isOpen? '600' : 'inherit' )};
`;