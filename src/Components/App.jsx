import React from 'react';

//local Components

import Navbar from './Navbar';
import SideText from './SideText';
import About from './About';
import Feature from './Feature';
import Footer from './Footer';

//images
import SideImage from './SideImage';
import HeroImage from '../images/HeroImage.png';
import AboutImg from '../images/about1.svg';
import Benefit1 from '../images/benefit1.svg';
import Benefit2 from '../images/benefit2.svg';
import Benefit3 from '../images/benefit3.svg';

//Material UI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSolid, faShieldHalved, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

function App() {
    return (
        <div>
            <Navbar />
            {/* main section starts  */}

            <div className='flex-container'>

                <SideText

                    supportingCopy="Smart ruppe has brought a service using which you can send money to from Indian account to Nepali account and vice versa easily and quickly using your phone only."
                    buttonName="Get Started"
                />

                <SideImage
                    url={HeroImage}
                />

            </div>
            {/* main section ends  */}

            {/* about section starts  */}

            <div className='flex-container'>
                <About
                    fontSize={{ fontSize: "3rem" }}
                    about="About"
                    paragraph="Smart ruppe has brought a service using which you can send money to your loved ones, merchants, and more from India or Nepal.
                    
                    Now without any trouble of you going to banks or exchange houses simply with few clicks on your phone or other devices."
                />

                <SideImage
                    url={AboutImg}
                />
            </div>
            {/* about section ends  */}


            {/* benefits section starts  */}

            <h1 className='benefitsHeading'>Money Exchange Just got easy</h1>

            <div className='flex-container1'>
                <Card className='card card1' >
                    <CardMedia
                        component="img"
                        height="200"
                        image={Benefit1}
                        alt="benefit1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Send money to others
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Now send money to  India from your Nepali account using mobile banking
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='card card2'  >
                    <CardMedia
                        component="img"
                        height="200"
                        image={Benefit2}
                        alt="benefit2"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Get money from others                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Now get money  from India in your Nepali account using mobile banking
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='card card3' >
                    <CardMedia
                        component="img"
                        height="200"
                        image={Benefit3}
                        alt="benefit3"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pay to merchants                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Conduct businesses without worrying about the mode of payment.
                        </Typography>
                    </CardContent>
                </Card>

            </div>
            {/* benefits section  ends  */}
            {/* features section  starts  */}

            <h1 className='benefitsHeading'>Why Smart ruppe</h1>

            <div className='flex-container1'>
                <Feature icon={faBolt}
                    label="Fast"
                    text="Transactions can be processed with in an hour and within minutes with special request"

                />
                <Feature icon={faShieldHalved}
                    label="Secure"
                    text="Now no worries about security, Safe transfer is guarantee"

                />
                <Feature icon={faMoneyBillTransfer}
                    label="Send more"
                    text="Send and receive 10k per day, cross limits with special request"

                />
            </div>
            {/* features section  ends  */}

            {/* Footer section starts */}
            <Footer 
            
            />
            {/* Footer section ends */}

        </div>
    )
}

export default App;