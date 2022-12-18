import styled from "styled-components";
import { Link } from "react-router-dom";

import { v, b } from "../../../../../styles/variables";

export const SDropdown = styled.div`
  top: ${v.headerHeight};
  white-space: nowrap;
  margin: 16px;
  margin-top: 0;

  @media ${b.md} {
    min-width: 300%;
    position: absolute;
  }
`;

export const STreeItem = styled.div`
    text-align: left;
`;

export const STreeChild = styled.div`
    margin-top: ${v.smSpacing};
`;

export const SInnerNavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding: ${v.smSpacing};
  padding-left: ${v.mdSpacing};
  :hover {
    color: var(--primary-color);
    font-weight: 500;
    transition: all 0.3s ease;
  }
`;