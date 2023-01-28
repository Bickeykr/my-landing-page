import React from 'react';

function About(props) {
    return (
        <div className='sideTextDiv'>
            <div className='heroTextDiv'>
                <h1 className=' sideTextDivH1 aboutHead'> {props.about}</h1>
                <p className='paragraphText'>

                    Now, send money to your loved ones, merchants, and more in India and also receive from them <b> with no extra cost (No bata) </b> and <b> without  going to any banks or exchange houses </b> simply send/receive with few clicks on your phone or other devices Get started to know more.
                </p>

            </div>
        </div>
    )
}

export default About;