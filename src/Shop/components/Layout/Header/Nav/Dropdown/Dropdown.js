import React, { Fragment, useState } from "react";
import { SDropDownButton, SNavLabel, SNavLabelContainer } from "../styles";
import { SDropdown, STreeChild, STreeItem, SInnerNavLink } from "./styles";

const TreeItem = ({ onSelectCallback, label, children, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <STreeItem>
      {link && (
        <SInnerNavLink to={link} onClick={onSelectCallback}>
          {label}
        </SInnerNavLink>
      )}
      {!link && (
        <SNavLabelContainer onClick={() => setIsOpen((p) => !p)}>
          <SNavLabel isOpen={isOpen}>{label}</SNavLabel>
          <SDropDownButton isOpen={isOpen} />
        </SNavLabelContainer>
      )}
      {children && isOpen && <STreeChild>{children}</STreeChild>}
    </STreeItem>
  );
};

const Dropdown = ({ tree, onSelectCallback }) => {
  const createTree = (branch) => (
    <TreeItem onSelectCallback={onSelectCallback} label={branch.label} link={branch.link}>
      {branch?.branches?.map((branch, index) => (
        <Fragment key={index}>{createTree(branch)}</Fragment>
      ))}
    </TreeItem>
  );

  
  console.log(tree);

  return (
    <SDropdown>
      {tree.map((branch, index) => (
        <Fragment key={index}>{createTree(branch)}</Fragment>
      ))}
    </SDropdown>
  );
};

export default Dropdown;