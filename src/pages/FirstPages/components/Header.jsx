import React from 'react';
import '../assets/css/Header.css';
import { useNavigate } from 'react-router-dom';



function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/HOME");
  };


  return (
    <header className="header_new">
        <div>
            <h2 className="brand-text">OM:D</h2>
        </div>
        <div>
            <h1 className="header-text">Makes Your Best <br/>MD Experience</h1>
        </div>
        <div>
          <button onClick={handleClick} className="header-button">Try for free</button>
        </div>
      </header>

  );
}

    
export default Header;

