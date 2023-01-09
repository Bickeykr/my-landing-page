import React from 'react';

import IndianFlag from '../images/IndianFlag.png';
import NepalFlag from '../images/NepalFlag.png';

function SideText(props) {
    return (

        <div className='sideText'>
            <h1>Send money
                <img className='flagImg' src={IndianFlag} alt="IndianFlag" />  to
                <img className='flagImg' src={NepalFlag} alt="NepalFlag" />   &  <img className='flagImg' src={NepalFlag} alt="NepalFlag" />  to
                <img className='flagImg' src={IndianFlag} alt="IndianFlag" /> easy </h1>

            <p>{props.supportingCopy}</p>
            <button type="submit" >{props.buttonName}</button>

        </div>

    )
}

export default SideText;