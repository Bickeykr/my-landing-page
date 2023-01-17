import React from 'react';
import CircleLogo from '../images/SmartRuppeLogo-removebg.png';



function Navbar() {
    return (
        <div className='navDiv'  >
            <nav>
                <img className='navLogo' src={CircleLogo} alt="SmartRuppeLogo" />
            </nav>
        </div>

    )
}

export default Navbar;
