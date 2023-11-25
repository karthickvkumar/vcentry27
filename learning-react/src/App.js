import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginScreen from "./screens/login-page";
import ContactScreen from "./screens/contact-page";
import HomeScreen from "./screens/home-page";
import LandingScreen from "./screens/landing-page";
import ToDoScreen from "./screens/todo-app-page";
import UserLoginPage from "./screens/user-login";
import AccountCreationPage from "./screens/account-creation";
import UserProfileScreen from "./screens/user-profile";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingScreen></LandingScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="todo" element={<ToDoScreen></ToDoScreen>}></Route>
        <Route path="signup" element={<UserLoginPage></UserLoginPage>}></Route>
        <Route path="account" element={<AccountCreationPage></AccountCreationPage>}></Route>
        <Route path="user" element={<UserProfileScreen></UserProfileScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;