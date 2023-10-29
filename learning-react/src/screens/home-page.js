import React from "react";
import {NavLink} from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/contact">Move to Contact Page</NavLink>
    </div>
  )
}

export default HomeScreen;

// ES5
// function ComponentName(){

// }
// export default ComponentName;


// ES6 - ES2015
// const ComponentName = () => {

// }
// expect default ComponentName;

// Naming Convention 

// 1. Pascal Case - KarthickKumar (Component Name)
// 2. Camel Case - karthickKumar (Variable or Function Name)
// 3. Snake Case - karthick_kumar (Variable or Function Name)
// 4. Kebab Case - karthick-kumar (HTML Attribute and CSS Class)