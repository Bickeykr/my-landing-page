import React from 'react';

//components

import Navbar from './Navbar';
import SideText from './SideText';
import About from './About';

//images
import SideImage from './SideImage';
import HeroImage from '../images/HeroImage.png';
import AboutImg from '../images/about1.svg';


function App() {
    return (
        <div>
            <Navbar />
            <div className='container'>

                <SideText

                    supportingCopy="Smart ruppe has brought a service using which you can send money to from indian account to Nepali account and vice versa easily and quickly using your phone only."
                    buttonName="Get Started"
                />

                <SideImage
                    url={HeroImage}
                />

            </div>
            <div className='container'>
                <About
                    fontSize={{ fontSize: "3rem" }}
                    about="About"
                    paragraph="Now without any troble you can send or get Nepali money or indian money in exchange of Nepali money or indian money with few clicks on your phone in you personal bank account watch this Detailed video to know more"
                />

                <SideImage
                    url={AboutImg}
                />  </div>
        </div>
    )
}

export default App;