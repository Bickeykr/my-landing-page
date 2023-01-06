import React from 'react';
import Navbar from './Navbar';
import SideText from './SideText';
import SideImage from './SideImage'
import HeroImage from '../images/download.png'

function App() {
    return (
        <div>
            <Navbar />
            <div className='container'>

                <SideText
                    headline="Now send money from india to Nepal & Nepal to india with few chicks"
                    supportingCopy="Smart ruppe has brought a service using which you can send money to from indian account to Nepali account and vice versa easily and quickly"
                    buttonName="Get Started"
                />

                <SideImage
                    url={HeroImage}
                />

            </div>
        </div>
    )
}

export default App;