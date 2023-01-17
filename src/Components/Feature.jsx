import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature(props) {
    return (
        <div> 
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
            <h3>{props.label}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Feature;