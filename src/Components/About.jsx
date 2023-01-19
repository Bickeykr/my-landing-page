import React from 'react';

function About(props) {
    return (
        <div className='sideText'>
            <div className='heroText'>
                <h1 className='aboutHead' style={props.fontSize}> {props.about}</h1>
                <p className='paragraphText'>{props.paragraph}</p>

            </div>
        </div>
    )
}

export default About;