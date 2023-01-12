import React from 'react';

function About(props) {
    return (
        <div className='sideText'>
            <div className='heroText'>
                <h1 style={props.fontSize}> {props.about}</h1>
                <p>{props.paragraph}</p>

            </div>
        </div>
    )
}

export default About;