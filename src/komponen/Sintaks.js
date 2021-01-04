import React from 'react';
const Sintaks = () => {
    return ( 
        <div id="sintaks" className="w3-row-padding w3-padding-64 w3-container">
            <div className="w3-content">
                <h3>Sintaks Penggunaan CSS</h3>
                <p>Aturan penulisan CSS terdiri dari selektor dan blok deklarasi</p>
                <img src="https://www.w3schools.com/css/selector.gif" alt="" className="src" style={{width:"100%"}}/>
                <ul>
                    <li>Selektor menunjuk ke elemen HTML yang diberi style</li>
                    <li>Blok deklarasi dapat berisi lebih dari 1 style dengan pemisah semicolon (titik koma)</li>
                    <li>Setiap deklarasi yang menyatakan nilai dari style (value) dipisahkan dengan color (titik dua)</li>
                    <li>Blok deklarasi dikelilingi dengan curl bracket (kurung kurawal)</li>
                </ul>
                <h3>Video rekomendasi dari The Net Ninja</h3>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/1CqHws4WZ-M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Video rekomendasi dari Web Dev Simplified</h3>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/1PnVor36_40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
     );
}
 
export default Sintaks;