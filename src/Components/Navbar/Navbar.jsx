import './Navbar.css'
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div>
        <div>
          <div className="nav-logo">
            {/* <img src={logo} alt="" /> */}
            <p>OM:D</p>
          </div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="musicals">Musicals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="shop">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="reviews">Reviews</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
    </div>
  );
}

export default Navbar;
