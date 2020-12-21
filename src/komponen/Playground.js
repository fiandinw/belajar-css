import React from 'react';
const Playground = () => {
    return ( 
        <>
        <div id="gridlayout" class="w3-row-padding w3-padding-64 w3-container">
            <div class="w3-content">
                <h2>Grid Layout CSS</h2>
                <p>Grid layout CSS memberikan sistem tata letak berbasis grid, dengan baris dan kolom, sehingga lebih mudah untuk mendesain halaman web tanpa harus menggunakan float dan pemosisian.</p>
                <p>Untuk membuat layout grid, anda harus mendefinisikan grid-container yang di dalamnya berisi grid-item. Perhatikan contoh dibawah</p>
                <p>Properti style display pada class grid-container wajib bernilai grid</p>
                <iframe height="265" style={{width: "100%"}} scrolling="no" title="Grid CSS" src="https://codepen.io/fiandinw/embed/LYRjWxJ?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fiandinw/pen/LYRjWxJ'>Grid CSS</a> by fiandinw
  (<a href='https://codepen.io/fiandinw'>@fiandinw</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                
            </div>
        </div>
        <div className="w3-row-padding w3-blue-grey w3-padding-64 w3-container">
            <div className="w3-content">
                <p>Contoh dibawah adalah penggunaan grid-template dengan mendefinisikan ukuran dan area yang akan ditentukan. setiap div didalam container diberi style properti grid-area untuk mendefinisikan nama area</p>
                <p>Edit contoh project dibawah untuk mencoba cara kerja grid-template</p>
            <iframe id="playground" src="https://www.cssgridplayground.com" style={{border:"none",width:"100%", height:"750px"}} title="iframe playground"></iframe>
            </div>
        </div>
        
     </>
     );
}
 
export default Playground;