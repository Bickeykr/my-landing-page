import React from 'react';

//Images
import SmartRuppeLogo from '../images/SmartRuppeLogo-removebg.png';

//FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (

    <div className=' footerDiv displayFlexAndWrap textCenter sectionBgColor' >
      <img className='footerImg' src={SmartRuppeLogo} alt="Smart Ruppe logo" />
      <p className='paragraphText copyRightText textCenter  '> <span role="img" aria-label="icon"> ©️ </span>  {CURRENTYEAR} Smart ruppe All rights reserved</p>
    </div>


  )
}

export default Footer;