import React from "react";
import Tilt from 'react-parallax-tilt';
import face from './face.png';
import './Logo.css';


const Logo = () => {
  return (
    <div className="ma4 mt0">
        <Tilt tiltMaxAngleX='1' tiltMaxAngleY='1'>
            <div className="Tilt br2 shadow-2 pa3" style={{ height: '150px', width: '150px'}}>
            <img style={{paddingTop: '14px'}} src={face} alt='logo' />
            </div>
        </Tilt>
    </div>
  );
}

export default Logo;