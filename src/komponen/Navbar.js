import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("w3-hide");
    const myFunction = () => {
        console.log("klik")
        if(menu === "w3-hide"){
            setMenu("w3-show");
        }else{
            setMenu("w3-hide");
        }
    }

    return (
    <div className="w3-top">
    <div className="w3-bar w3-blue-grey w3-card w3-left-align w3-large">
    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-blue-grey" onClick={myFunction} title="Toggle Navigation Menu">Menu</a>
    <Link to="/" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Home</Link>
    <Link to="/pengenalan" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Pengenalan</Link>
    <Link to="/sintaks" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Sintaks</Link>
    <Link to="/textstyle" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Text Style</Link>
    <Link to="/gridlayout" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Grid Layout</Link>
    </div>
    <div id="navDemo" className={`w3-bar-block w3-white ${menu} w3-hide-large w3-hide-medium w3-large`}>
    <Link to="/pengenalan" className="w3-bar-item w3-button w3-padding-large">Pengenalan</Link>
    <Link to="/sintaks" className="w3-bar-item w3-button w3-padding-large">Sintaks</Link>
    <Link to="/textstyle" className="w3-bar-item w3-button w3-padding-large">Text Style</Link>
    <Link to="/gridlayout" className="w3-bar-item w3-button w3-padding-large">Grid Layout</Link>
    </div>
    </div>
     );
}
 
export default Navbar;