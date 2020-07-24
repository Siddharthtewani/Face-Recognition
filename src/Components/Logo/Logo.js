import React from 'react';
import Tilt from 'react-tilt';

import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={"https://th.bing.com/th/id/OIP.YSt0mqqQf2gLjtHweRKdEgHaHa?pid=Api&rs=1"}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;