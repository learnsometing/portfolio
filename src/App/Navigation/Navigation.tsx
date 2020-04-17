import React, { ReactElement } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation(): ReactElement {
  return (
    <Navbar bg="dark" sticky="top" variant="dark">
      <Nav navbar defaultActiveKey="#portfolio">
        <Nav.Item>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
