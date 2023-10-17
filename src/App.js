import React, { useState } from 'react';
import './App.css';
import "./Homepage.css"
import Homepage from './Homepage';
import {BrowserRouter,Routes,Route,NavLink,ReactDOM} from 'react-router-dom';
import Signuppage from './components/Signuppage';
import Signinpage from './components/Signinpage';
import Explore from './explore/Explore';
import News from './News/News';
import Weatherpage from './weather/Weatherpage';
import Map from './Map/Map';
import Random from './Random/Random';
import Rocksp from './RSP/Rocksp';
import Information from './Information/Information';






function App() {
  return (
    <div>
      <BrowserRouter>
      
          <Routes>
            <Route path='/' element={<Signinpage/>}/>
            <Route path='/Homepage' element={<Homepage/>}/>
            <Route path='/signup' element={<Signuppage/>}/>
            <Route path = '/explore' element={<Explore/>}/>
            <Route path = '/News' element={<News/>}/>
            <Route path = '/Weather' element={<Weatherpage/>}/>
            <Route path = '/Map' element={<Map/>}/>
            <Route path = '/Random' element={<Random/>}/>
            <Route path = '/Information' element={<Information/>}/>
            <Route path = '/Rockspaper' element={<Rocksp/>}/>
          </Routes>

    </BrowserRouter>
   </div>
  );
}

export default App;
