import React from 'react';

import IndianFlag from '../images/IndianFlag.png';
import NepalFlag from '../images/NepalFlag.png';

function SideText(props) {
    return (

        <div className='sideText'>
            <div className='heroText'>
                <h1>Send money
                    Nepal to  India &  India     to
                    Nepal  easy easy

                    {/* <img className='flagImg' src={NepalFlag} alt="NepalFlag" /> */}

                    {/* <img className='flagImg' src={IndianFlag} alt="IndianFlag" />    */}


                    {/* <img className='flagImg' src={IndianFlag} alt="IndianFlag" /> */}

                    {/* <img className='flagImg' src={NepalFlag} alt="NepalFlag" /> */}
                   
                </h1>

                <p>{props.supportingCopy}</p>
                <button type="submit" >{props.buttonName}</button>
            </div>
        </div>

    )
}

export default SideText;