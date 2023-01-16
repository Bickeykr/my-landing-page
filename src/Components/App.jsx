import React from 'react';

//components

import Navbar from './Navbar';
import SideText from './SideText';
import About from './About';

//images
import SideImage from './SideImage';
import HeroImage from '../images/HeroImage.png';
import AboutImg from '../images/about1.svg';
import Feature from '../images/feature_3.png';

//Metarial UI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
{/* <CardActionArea>
</CardActionArea> */}


function App() {
    return (
        <div>
            <Navbar />
            {/* main section starts  */}

            <div className='container'>

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

            <div className='container'>
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

            <h2 className='benefitsHeading'>Money Exchange just got easy</h2>
            <div className='container'>
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                        component="img"
                        height="340"
                        image={Feature}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Send money to other
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can send Indian money to other bank account(Indian) by transferring from Nepali account
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                        component="img"
                        height="140"
                        image={HeroImage}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Send money to other
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can send Indian money to other bank account(Indian) by transferring from Nepali account
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                        component="img"
                        height="140"
                        image={HeroImage}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Send money to other
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can send Indian money to other bank account(Indian) by transferring from Nepali account
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            {/* benefits section  ends  */}

        </div>
    )
}

export default App;