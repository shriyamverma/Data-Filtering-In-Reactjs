import React from 'react';

const NavBar = () => {
  return (
    <nav>
    <div className="nav-wrapper white white">
      <a style={{marginLeft: '10px'}} href="#" className="brand-logo left">Data Filtering in ReactJs</a>
      <ul id="nav-mobile" className="right">
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;
