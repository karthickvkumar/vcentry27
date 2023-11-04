import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginScreen from "./screens/login-page";
import ContactScreen from "./screens/contact-page";
import HomeScreen from "./screens/home-page";
import LandingScreen from "./screens/landing-page";
import ToDoScreen from "./screens/todo-app-page";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingScreen></LandingScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="todo" element={<ToDoScreen></ToDoScreen>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;