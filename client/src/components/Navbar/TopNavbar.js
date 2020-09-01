import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./css/TopNavbar.css";

class TopNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar expand="lg">
          <NavbarBrand href="/" />
          <NavbarToggler onClick={this.toggle} style={{ color: "black" }} />
          <Collapse isOpen={this.state.isOpen} className="nav_link" navbar>
            <Nav className="ml-1" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="nav_link"
                  to="/home"
                  exact
                  activeStyle={{ color: "red" }}
                >
                  Home &nbsp;
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav_link" href="/">
                  News &nbsp;
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav_link" href="/">
                  Sport &nbsp;
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav_link" href="/">
                  Travel &nbsp;
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav_link">
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="nav_link"
                  to="/about"
                  activeStyle={{ color: "black" }}
                >
                  About &nbsp;
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="nav_link"
                  to="/about"
                  activeStyle={{ color: "black" }}
                >
                  About &nbsp;
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
