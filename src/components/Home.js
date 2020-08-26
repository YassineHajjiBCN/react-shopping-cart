import React, { useState } from 'react';
import Nike from '../images/Nike.png';
import Adidas from '../images/Adidas.png';
import NB from '../images/NB.png';
import Puma from '../images/Puma.png';

const Home = () => {


    return(
 <div className="container">
    <div className="image">
      <img src={Nike} alt="Nike Snickers" />
      <h3>Nike Snickers</h3>
      <h3>$250</h3>
      <a className="addtocart cart1" href="#">Add to chart</a>
    </div>
    <div className="image">
      <img src={Adidas} alt="Adidas Snickers" />
      <h3>Adidas Snickers</h3>
      <h3>$175</h3>
      <a className="addtocart cart2" href="#">Add to chart</a>
    </div>
    <div className="image">
      <img src={NB} alt="NB Snickers" />
      <h3>NB Snickers</h3>
      <h3>$150</h3>
      <a className="addtocart cart3" href="#">Add to chart</a>
    </div>
    <div className="image">
      <img src={Puma} alt="Puma Snickers" />
      <h3>Puma Snickers</h3>
      <h3>$95</h3>
      <a className="addtocart cart4" href="#">Add to chart</a>
    </div>
    <div className="image">
      <img src={Puma} alt="Puma Snickers" />
      <h3>Puma Snickers</h3>
      <h3>$95</h3>
      <a  className="addtocart cart5" href="#">Add to chart</a>
    </div>
    <div className="image">
      <img src={Puma} alt="Puma Snickers" />
      <h3>Puma Snickers</h3>
      <h3>$95</h3>
      <a  className="addtocart cart6" href="#">Add to chart</a>
    </div>
    

 </div>
    );
}

export default Home;