import React from 'react';

//Images 
import IndianFlag from '../images/IndianFlag.png';
import NepalFlag from '../images/NepalFlag.png';

//components 
import MailchimpFormContainer from './/MailchimpFormContainer';

function SideText(props) {
    return (

        <div className='sideTextDiv'>
            <div className='heroTextDiv'>
                <h1 className='sideTextDivH1'>Send money with few clicks on your phone
                    <img className='flagImg' src={NepalFlag} alt="NepalFlag" />
                    <img className='flagImg' src={IndianFlag} alt="IndianFlag" />
                </h1>
                <p className='paragraphText'>{props.supportingCopy}</p>
                <MailchimpFormContainer />

                {/* <button className='getStartedBtn' type="submit" >{props.buttonName}</button> */}
                
            </div>
        </div>

    )
}

export default SideText;