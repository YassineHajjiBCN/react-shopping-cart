import React from 'react';

function Navbar() {
  return ( 
    <header>
      <div className="overlay"></div>
      <nav>
        <div className="icon"> Le Turnschuhe </div>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="About">About</a></li>
          <li className="cart"><a href="Cart">
          <ion-icon name="basket-outline"></ion-icon>Cart</a></li>
        </ul>
      </nav>
    </header>

  );
}
  export default Navbar;