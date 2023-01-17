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
        <p className='paragraphText copyRightText  '> ©️ {CURRENTYEAR} Smart ruppe All rights reserved</p>
      </div>

      <div className='footerContact' >
        <h1 className='contactHead'>Contact</h1>
        <a href="#" className='socialIcon'><FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></a>
        <a href="#" className='socialIcon'><FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon></a>

        <p className='paragraphText' >Made with ❤️ by <a className='myTwitter' href="https://twitter.com/Bickey_kr" target="_blank">Bickey</a> </p>
      </div>
    </div>
  )
}

export default Footer;