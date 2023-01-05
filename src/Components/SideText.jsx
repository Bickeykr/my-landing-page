import React from 'react';

function SideText(props) {
    return (
        
            <div>
                <h1>{props.headline}</h1>
                <p>{props.supportingCopy}</p>
                <button type="submit" >{props.buttonName}</button>

            </div>
         
    )
}

export default SideText;