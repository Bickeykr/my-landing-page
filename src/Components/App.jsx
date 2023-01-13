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

                    supportingCopy="Smart ruppe has brought a service using which you can send money to from Indian account to Nepali account and vice versa easily and quickly using your phone only."
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
                    paragraph="Smart ruppe has brought a service using which you can send money to your loved ones, merchants, and more from India or Nepal.
                    
                    Now without any trouble of you going to banks or exchange houses simply with few clicks on your phone or other devices."
                />

                <SideImage
                    url={AboutImg}
                />  </div>
        </div>
    )
}

export default App;