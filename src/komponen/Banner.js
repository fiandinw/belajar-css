import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
    return ( 
  <header class="w3-container w3-blue w3-center" style={{padding:"128px 16px"}}>
  <h1 class="w3-margin w3-jumbo">BELAJAR CSS</h1>
  <p class="w3-xlarge">Belajar Dasar CSS</p>
  <Link to="pengenalan"><button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Mulai Belajar</button></Link>
  </header>
     );
}
 
export default Banner;