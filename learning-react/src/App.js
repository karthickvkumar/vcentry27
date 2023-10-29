import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeScreen from "./screens/home-page";
import LoginScreen from "./screens/login-page";
import ContactScreen from "./screens/contact-page";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;