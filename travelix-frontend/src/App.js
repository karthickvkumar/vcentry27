import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from './pages/home';
import AboutPage from './pages/about';
import DestinationsPage from './pages/destinations';
import HotelsPage from './pages/hotels';
import ContactPage from './pages/contact';
import AdminDestinationPage from './pages/admin-destination';

import "./css/flaticon.css";
import "./css/style.css";
import "./css/custom.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage></HomePage>}></Route>
        <Route path='about' element={<AboutPage></AboutPage>}></Route>
        <Route path='destination' element={<DestinationsPage></DestinationsPage>}></Route>
        <Route path='hotel' element={<HotelsPage></HotelsPage>}></Route>
        <Route path='contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='admin-destination' element={<AdminDestinationPage></AdminDestinationPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;