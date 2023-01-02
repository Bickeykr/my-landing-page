import React from 'react';
import CircleLogo from '../images/SmartRuppeLogo.png';

var HelloMessage = "Hello";
const backGroundColor = {
    backgroundColor: "red",
    marginTop: "0", 
    height: "150px"
};

function Navbar() {
    return (
        <div>
            <nav>
                <div style={backGroundColor}>
                    <img src={CircleLogo} alt="SmartRuppeLogo" />
                    <h1>{HelloMessage}</h1>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;
