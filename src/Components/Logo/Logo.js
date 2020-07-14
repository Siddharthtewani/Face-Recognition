import React from 'react';
import 'tachyons' ;
import Tilt from 'react-tilt';
import './Logo.css' ;


function Logo() {
  return (
    <div>
                    
            <Tilt className="tilt shadow-2 br2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            
            <img className="tilt-inner" alt="Logo" src={"https://th.bing.com/th/id/OIP.oz27vQVBQGX8j6u5s9LhFgHaHa?pid=Api&rs=1" }></img>
            </Tilt>
    </div>
  );
}

export default Logo;
