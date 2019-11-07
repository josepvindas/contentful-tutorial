import React from 'react';
import { Navbar } from 'react-bootstrap';

import Styles from './Styles';

function NavBar(props) {
  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>BOOK APP</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
