import React, {useState, useEffect} from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import { jwtDecode } from "jwt-decode";

const GoogleSigninPage = () => {
  const [profileInfo, updateProfileInfo] = useState({});

  const responseMessage = (response) => {
    console.log(response);
    const decodedData = jwtDecode(response.credential);
    console.log(decodedData);
    updateProfileInfo(decodedData);
  };
  const errorMessage = (error) => {
      console.log(error);
  };

  const logOut = () => {
    googleLogout();
    updateProfileInfo({});
};

  return (
    <div>
      <h2>Google Signin Page</h2>

      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} useOneTap/>
      <button onClick={() => logOut()}>Loggout</button>

      <h2>Logged in User Details</h2>
      <h3>Name : {profileInfo?.name}</h3>
      <h3>Email : {profileInfo?.email}</h3>
      <h3>Picture :</h3>
      <img src={profileInfo?.picture}/>
    </div>
  );
};

export default GoogleSigninPage;