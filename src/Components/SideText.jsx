import React from 'react';

//Images 
import IndianFlag from '../images/IndianFlag.png';
import NepalFlag from '../images/NepalFlag.png';

//components 
import MailchimpFormContainer from './/MailchimpFormContainer';

function SideText() {
    return (

        <div className='sideTextDiv'>
            <div className='heroTextDiv'>
                <h1 className='sideTextDivH1'>Send & Receive money with few clicks on your phone
                    <img className='flagImg' src={NepalFlag} alt="NepalFlag" />
                    <img className='flagImg' src={IndianFlag} alt="IndianFlag" />
                </h1>
                <p className='paragraphText'>
                    Smart ruppe has brought a service using which you can send money to India from Nepal and receive money from India in Nepal Digitally   <b>  with 0 extra charges.</b>
                </p>
                {/* <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode sir.</small> */}
                <MailchimpFormContainer />


            </div>
        </div>

    )
}

export default SideText;