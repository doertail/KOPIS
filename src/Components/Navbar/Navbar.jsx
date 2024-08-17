import './Navbar.css'
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
        <div>
          <div className="nav-logo">
            {/* <img src={logo} alt="" /> */}
            <p>OM:D</p>
          </div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <div onClick={() => navigate('/home')}>Home</div>
            </Nav.Item>
            <Nav.Item>
              <div onClick={() => navigate('/musicals')}>Musicals</div>
              {/* <Nav.Link href="musicals">Musicals</Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
              <div onClick={() => navigate('/shop')}>Shop</div>
              {/* <Nav.Link href="shop">Shop</Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
              <div onClick={() => navigate('/reviews')}>Reviews</div>
              {/* <Nav.Link href="reviews">Reviews</Nav.Link> */}
            </Nav.Item>
          </Nav>
        </div>
    </div>
  );
}

export default Navbar;
