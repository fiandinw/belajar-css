import React from 'react';

const Pengenalan = () => {
    return ( 
        <>
        <div id="pengenalan" className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
            <div className="w3-content">
                <div className="w3-third w3-center">
                    <img src="https://bs-uploads.toptal.io/blackfish-uploads/skill_page/content/logo_file/logo/5708/CSS-7180db2b35a5dc8e8e9e60729b54de02.png" alt="logo CSS" srcset=""/>
                </div>
                <div className="w3-twothird">
                <h1>Cascading Style Sheet</h1>
                <h3>
                    Apa itu CSS?
                </h3>
                    <ul>
                        <li>CSS adalah singkatan dari Cascading Style Sheets</li>
                        <li>CSS menjelaskan bagaimana elemen HTML ditampilkan di layar, kertas, atau di media lain</li>
                        <li>CSS menghemat banyak pekerjaan. Itu dapat mengontrol tata letak beberapa halaman web sekaligus</li>
                        <li>Stylesheet eksternal disimpan dalam file CSS</li>
                    </ul>
                <h3>Bagaimana cara menggunakan CSS?</h3>
                <h5>Saat browser membaca style sheet, itu akan memformat dokumen HTML sesuai dengan informasi di style sheet.</h5>
                <h3>Tiga Cara Menyisipkan CSS</h3>
                    <ul>
                        <li>External CSS</li>
                        <li>Internal CSS</li>
                        <li>Inline</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="w3-row-padding w3-dark-grey w3-padding-64 w3-container">
            <div className="w3-content">
            <h3>External CSS</h3>
            <iframe height="265" style={{width: "100%"}} scrolling="no" title="css external" src="https://codepen.io/fiandinw/embed/NWRpRoz?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/fiandinw/pen/NWRpRoz'>css external</a> by fiandinw
            (<a href='https://codepen.io/fiandinw'>@fiandinw</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
            <br/><br/>
            <h3>Internal CSS</h3>
            <iframe height="265" style={{width: "100%"}} scrolling="no" title="internal css" src="https://codepen.io/fiandinw/embed/qBarawZ?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/fiandinw/pen/qBarawZ'>internal css</a> by fiandinw
            (<a href='https://codepen.io/fiandinw'>@fiandinw</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
            <br/><br/>
            <h3>Inline CSS</h3>
            <iframe height="265" style={{width: "100%"}} scrolling="no" title="inline css" src="https://codepen.io/fiandinw/embed/OJRpRGQ?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/fiandinw/pen/OJRpRGQ'>inline css</a> by fiandinw
            (<a href='https://codepen.io/fiandinw'>@fiandinw</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
            </div>
        </div>
        </>
     );
}
 
export default Pengenalan;