import React from 'react';
import SmartRuppeLogo from '../images/SmartRuppeLogo-removebg.png';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const CURRENTYEAR = new Date().getFullYear();
function Footer() {
  return (
    <div className='footerDiv flex-container1'>
      <div className='footerLogo'  >
        <img className='footerImg' src={SmartRuppeLogo} alt="Smart Ruppe logo" />
        <p className='paragraphText copyRightText'> ©️ {CURRENTYEAR} Smart ruppe All rights reserved</p>
      </div>

      <div className='footerContact' >
        <h1 className='contactHead'>Contact</h1>
        <span> <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></span>
        <span><FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon></span>
        <p className='paragraphText'>Made with ❤️ by Bickey.</p>
      </div>
    </div>
  )
}

export default Footer;