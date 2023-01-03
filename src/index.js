import React from "react";
import ReactDom from "react-dom";

import App from './Components/App';




ReactDom.render(
  <App /> ,
  document.getElementById("root")
);

//  Important Notes
// - values of attributes are stored in variables
// - way to give class name to element to be styled className="squareImage" src={img} or src="https://i.ytimg.com/vi/XsipAaImDVc/maxresdefault.jpg"
// - Import components and use them import Heading from "./Heading.jsx";<Heading />
// - Inline style are stored in object from so we can access them that way as well const customStyle = {
 //   color: ""
  //};
// - Use props here is props basics https://codesandbox.io/s/react-props-forked-t76gtn?file=/src/index.js we have all props related practice or studied in props folder in code sandbox
// - Make use of react dev tools 
// - Using CSS we can give elements what ever style we want
// - Use of ternary operator of conditional rendering 
// - we can use all javascript function in js files like onClick() onChange()
// - pervValue function and complex state Spread operator, Arrow functions

