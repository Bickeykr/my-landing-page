import React from 'react';
import CircleLogo from '../images/SmartRuppeLogo.png';

 

function Navbar() {
    return (
        <div>
            <nav>
                <div  className='navDiv'>
                    <img className='navLogo' src={CircleLogo} alt="SmartRuppeLogo" />
                 </div>
            </nav>
        </div>

    )
}

export default Navbar;
