import React from 'react';

import IndianFlag from '../images/IndianFlag.png';
import NepalFlag from '../images/NepalFlag.png';

function SideText(props) {
    return (

        <div className='sideText'>
            <div className='heroText'>
                <h1>Send money with few clicks on your phone
                    <img className='flagImg' src={NepalFlag} alt="NepalFlag" />
                    <img className='flagImg' src={IndianFlag} alt="IndianFlag" />
                </h1>
                <p className='paragraphText'>{props.supportingCopy}</p>
                <button type="submit" >{props.buttonName}</button>
            </div>
        </div>

    )
}

export default SideText;