import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature(props) {
    return (
        <div className='featureDiv' > 
            <FontAwesomeIcon icon={props.icon} className="featureIcon"></FontAwesomeIcon>
            <h3 className='featureHeading'>{props.label}</h3>
            <p className='paragraphText' style={{textAlign: "center"}}>{props.text}</p>
        </div>
    )
}

export default Feature;