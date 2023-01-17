import React from 'react';
import SmartRuppeLogo from '../images/SmartRuppeLogo-removebg.png';



function Navbar() {
    return (
        <div className='navDiv'  >
            <nav>
                <img className='navLogo' src={SmartRuppeLogo} alt="SmartRuppeLogo" />
                
            </nav>
        </div>

    )
}

export default Navbar;
