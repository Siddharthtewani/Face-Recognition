import React from 'react';
import './ImageLink.css';
import Tilt from 'react-tilt';
import 'tachyons';
function ImageLinkForm({onInputChange , onSubmit}) {
  return (
    <div>
         <p id="imagelinkpara">This will detect faces in your pictures ,Give it a chance atleast!!</p>
         <div  id="formmaindiv">
         <input type="text" id="inputform" onChange={onInputChange}></input>
         <div id="tiltingdetect">
         <Tilt  options={{ max : 25 }} style={{ height: 150, width: 150 }} >
             <button id="detect-button" onClick={onSubmit}>Detect</button>
         </Tilt>
         </div>
        
         </div>
         
    </div>
  );
}

export default ImageLinkForm;
