import React from 'react';

//Images
import SmartRuppeLogo from '../images/SmartRuppeLogo-removebg.png';

//FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (
    <div className='footerDiv flex-container1 displayFlexAndWrap textCenter'>
      <div className='footerLogo' >
        <img className='footerImg' src={SmartRuppeLogo} alt="Smart Ruppe logo" />
        <p className='paragraphText copyRightText textCenter  '> <span role="img" aria-label="icon"> ©️ </span>  {CURRENTYEAR} Smart ruppe All rights reserved</p>
      </div>

      {/* <div >
        <h1 className='contactHead'>Contact</h1>
        <a href="#button" className='socialIcon'><FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></a>
        <a href="#button" className='socialIcon'><FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon></a>
        <p className='paragraphText textCenter' >Made with<span role="img" aria-label="icon"> ❤️ </span>   by <a className='myTwitter' href="https://twitter.com/Bickey_kr" target="_blank" rel="noopener noreferrer">Bickey</a> </p>
      </div> */}
    </div>
  )
}

export default Footer;