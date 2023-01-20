import React from 'react';

function About(props) {
    return (
        <div className='sideTextDiv'>
            <div className='heroTextDiv'>
                <h1 className=' sideTextDivH1 aboutHead'> {props.about}</h1>
                <p className='paragraphText'>{props.paragraph}</p>

            </div>
        </div>
    )
}

export default About;