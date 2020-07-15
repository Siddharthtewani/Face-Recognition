import React from 'react';
import './FaceRecoganition.css';
function FaceRecoganition({imageurl, box}) {
  return (
       <div className="center ma" id="maincenterimaging">
         <div className="absolute mt2">

          <img  id="imageofperson"  src={imageurl}/>
         <div className="bounding-box" style={{top:box.topRow , right: box.rightCol , bottom: box.bottomRow , left:box.leftCol}}></div>
         </div>
         
    </div>
    
  );
}

export default FaceRecoganition;
