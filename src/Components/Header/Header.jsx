import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './Header.css'; // 스타일을 위한 CSS 파일

function Header() {
  const location = useLocation();
  const isFirstPage = location.pathname === '/';

  return (
    <div>
          <header className="header">
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item"><a href="/login">Login</a></li>
                <li className="nav-item"><a href="/joinus">JoinUS</a></li>
                <li className="nav-item"><a href="/mypage">Mypage</a></li>
                <li className="nav-item"><a href="/order">Order</a></li>
                <li className="nav-item"><a href="/cart">Cart</a></li>
              </ul>
            </nav>
          </header>
    </div>
  );
};


export default Header;
