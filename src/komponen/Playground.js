import React from 'react';
const Playground = () => {
    return ( 
        <div id="gridlayout" class="w3-row-padding w3-padding-64 w3-container">
            <div class="w3-content">
                    <iframe id="playground" src="https://www.cssgridplayground.com" style={{border:"none",width:"100%", height:"750px"}} title="iframe playground"></iframe>
            </div>
        </div>
     );
}
 
export default Playground;