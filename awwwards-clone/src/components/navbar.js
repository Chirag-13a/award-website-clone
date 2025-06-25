import React from 'react';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span className="logo">W.</span>
        <nav>
          <a href="#">Explore </a>
          <a href="#">Directory</a>
          <a href="#">Academy <span className="new">NEW</span></a>
          <a href="#">Jobs</a>
          <a href="#">Market</a>
        </nav>
      </div>

      <div className="center">
        <div className="search">
        
          <input type="text" placeholder="Search by Websites" />
        </div>
      </div>

      <div className="right">
        <a href="#">Log in</a>
        <a href="#">Sign Up</a>
        <button className="btn dark">Be Pro</button>
        <button className="btn light">Submit Website</button>
      </div>
    </div>
  );
};

export default Navbar;
