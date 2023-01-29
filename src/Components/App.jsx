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
import IndianFlag from '../images/IndianFlag.png';
import NepalFlag from '../images/NepalFlag.png';
import Benefit1 from '../images/benefit1.svg';
import Benefit2 from '../images/benefit2.svg';
import Benefit3 from '../images/benefit3.svg';


//Material UI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Fontawesome 
import { faBolt, faShieldHalved, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import MailchimpFormContainer from './MailchimpFormContainer';

function App() {
    return (
        <div>
            <Navbar />

            {/* main section starts  */}
            <div className='flex-container displayFlexAndWrap'>

                <SideText />

                <SideImage
                    url={HeroImage}
                />

            </div>
            {/* main section ends  */}

            {/* About section starts  */}
            <div className='flex-container displayFlexAndWrap sectionBgColor' >
                <About
                    about="About"
                />

                <SideImage
                    url={AboutImg}
                />
            </div>
            {/* About section ends  */}

            {/* benefits section starts  */}
            <h1 className='benefitsHeading textCenter'>Money Exchange between
                <img className='fImg' src={NepalFlag} alt="NepalFlag" />
                <img className='fImg' src={IndianFlag} alt="IndianFlag" />
                Just got easy & free
            </h1>

            <div className='flex-container1 displayFlexAndWrap'>
                <Card className='card' >
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

                <Card className='card  '  >
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
                            Now receive money from India in your Nepali account using mobile banking
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='card  ' >
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
            <div className='sectionBgColor' >
                <h1 className='benefitsHeading textCenter'>Why Smart ruppe</h1>

                <div className='flex-container1 displayFlexAndWrap'>
                    <Feature icon={faBolt}
                        label="Fast"
                        text="Transactions will be processed within seconds "
                    />

                    <Feature icon={faShieldHalved}
                        label="Secure"
                        text="Now no worries about security, Safe transfer is guarantee"
                    />

                    <Feature icon={faMoneyBillTransfer}
                        label="Send more"
                        text="No transaction limits send/receive as much as you want"
                    />
                </div>
            </div>
            {/* features section  ends  */}
            
            {/* Get Started section starts */}
            <div  >
                <h1 className='benefitsHeading getStartedText textCenter'>Get Started</h1>

                <div className='getStartedDiv' >
                     <MailchimpFormContainer/>
                </div>
            </div>
            {/* Get Started section ends */}

            {/* Footer section starts */}
            <Footer />
            {/* Footer section ends */}

        </div>
    )
}

export default App;