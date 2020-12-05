import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

class MyNavbar extends Component {
  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className="nav-bar" to='/'>Home</Link>
              <Link className="nav-dash-bar" to='/timer'>Timer</Link>
            </NavItem>
          </Nav>
          </Navbar>
    </div>
    );
  }
}

export default MyNavbar;
