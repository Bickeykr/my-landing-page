import React from 'react';
import Navbar from './Navbar';
import SideText from './SideText';
import SideImage from './SideImage'

function App() {
    return (
        <div>
            <Navbar/> 
            <span>
            <SideText
                headline="Now send"
            />
            </span>
         </div>
    )
}

export default App;