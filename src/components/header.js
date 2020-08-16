import PropTypes from "prop-types"
import React from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

class Header extends React.Component {
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/glossary">Glossary</NavLink>
            </NavItem>   
            <NavItem>
              <NavLink href="/tags">Tags</NavLink>
            </NavItem>          
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
        </Navbar>
       </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
