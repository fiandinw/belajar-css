import React, { useState } from 'react';

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
    <a href="#" className="w3-bar-item w3-button w3-padding-large w3-hover-white">Home</a>
    <a href="#pengenalan" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Pengenalan</a>
    <a href="#sintaks" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Sintaks</a>
    <a href="#textstyle" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Text Style</a>
    <a href="#gridlayout" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Grid Layout</a>
    </div>
    <div id="navDemo" className={`w3-bar-block w3-white ${menu} w3-hide-large w3-hide-medium w3-large`}>
    <a href="#pengenalan" className="w3-bar-item w3-button w3-padding-large">Pengenalan</a>
    <a href="#sintaks" className="w3-bar-item w3-button w3-padding-large">Sintaks</a>
    <a href="#textstyle" className="w3-bar-item w3-button w3-padding-large">Text Style</a>
    <a href="#gridlayout" className="w3-bar-item w3-button w3-padding-large">Grid Layout</a>
    </div>
    </div>
     );
}
 
export default Navbar;