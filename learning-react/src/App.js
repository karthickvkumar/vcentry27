import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginScreen from "./screens/login-page";
import ContactScreen from "./screens/contact-page";
import HomeScreen from "./screens/home-page";
import LandingScreen from "./screens/landing-page";
import ToDoScreen from "./screens/todo-app-page";
import UserLoginPage from "./screens/user-login";
import AccountCreationPage from "./screens/account-creation";
import UserProfileScreen from "./screens/user-profile";
import GETAllUsersPage from "./screens/get-all-user";
import PostUserAccountPage from "./screens/post-user-account";
import NodeGetApiPage from "./screens/node-get-api";
import CrudOperationPage from "./screens/crud-operation";
import MasterPage from "./screens/master-page";
import SecondMasterPage from "./screens/second-master-page";

import DataSharing from "./context-api";
import GoogleSigninPage from "./screens/google-signin";
import GoogleCalanderPage from "./screens/google-calander";
import DisplayAllInterest from "./screens/display-all-intrest";
import DisplaySelectedInterest from "./screens/display-selected-intrest";

function App(){

  const [searchHistory, updateSearchHistory] = useState([]);

  const dataExchange = (data) => {
    updateSearchHistory(data);
  }

  return(
    <DataSharing.Provider value={{ dataExchange, searchHistory }}>
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
          <Route path="all" element={<GETAllUsersPage></GETAllUsersPage>}></Route>
          <Route path="post" element={<PostUserAccountPage></PostUserAccountPage>}></Route>
          <Route path="node" element={<NodeGetApiPage></NodeGetApiPage>}></Route>
          <Route path="crud" element={<CrudOperationPage></CrudOperationPage>}></Route>
          <Route path="master" element={<MasterPage></MasterPage>}></Route>
          <Route path="master2" element={<SecondMasterPage></SecondMasterPage>}></Route>
          <Route path="google" element={<GoogleSigninPage></GoogleSigninPage>}></Route>
          <Route path="cal" element={<GoogleCalanderPage></GoogleCalanderPage>}></Route>

          <Route path="all-interest" element={<DisplayAllInterest></DisplayAllInterest>}></Route>
          <Route path="interest/:interestName" element={<DisplaySelectedInterest></DisplaySelectedInterest>}></Route>

        </Routes>
      </BrowserRouter>
    </DataSharing.Provider>
  )
}

export default App;