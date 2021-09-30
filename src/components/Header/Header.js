import React from "react";
import './Header.css';

function Header(props) {
  const setCategory = props.setCategory;
  return (
    <>
      <div className="header-title">
        <h3>
        <i className="fas fa-running fa-lg"></i> Sports <i><strong>Man</strong></i>.ia 
        </h3>
      </div>

      <nav>
        <li>
          <a href="#" onClick={()=> setCategory('cricket')}><i className="fas fa-baseball-ball fa-lg"></i>Cricket</a>
        </li>
        <li>
          <a href="#" onClick={()=> setCategory('football')}><i className="fas fa-futbol fa-lg"></i>Football</a>
        </li>
        <li>
          <a href="#" onClick={()=> setCategory('basketball')}><i className="fas fa-basketball-ball fa-lg"></i>Basketball</a>
        </li>
      </nav>
    </>
  );
}

export default Header;
