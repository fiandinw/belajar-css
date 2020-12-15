import React from 'react';
const Sintaks = () => {
    return ( 
        <div id="sintaks" className="w3-row-padding w3-padding-64 w3-container">
            <div className="w3-content">
                <h3>Sintaks Penggunaan CSS</h3>
                <p>Aturan penulisan CSS terdiri dari selektor dan blok deklarasi</p>
                <img src="https://www.w3schools.com/css/selector.gif" alt="" className="src"/>
                <ul>
                    <li>Selektor menunjuk ke elemen HTML yang diberi style</li>
                    <li>Blok deklarasi dapat berisi lebih dari 1 style dengan pemisah semicolon (titik koma)</li>
                    <li>Setiap deklarasi yang menyatakan nilai dari style (value) dipisahkan dengan color (titik dua)</li>
                    <li>Blok deklarasi dikelilingi dengan curl bracket (kurung kurawal)</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Sintaks;