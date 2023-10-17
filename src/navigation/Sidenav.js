import React, { useState } from 'react'
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';



function Sidenav() {

  

  const handleHomepageClick = () => {
    window.location.href = '/Homepage'
  };
  const handleNewsClick = () => {
    
    window.location.href = '/News'
  };
  const handleWeatherClick = () => {
    window.location.href = '/Weather'
  };
  const handleMapClick = () => {
    window.location.href = '/Map'
  };
  const handleInformationClick = () => {
    window.location.href = '/Information'
  };
  const handleRandomClick = () => {
    window.location.href = '/Random'
  };
  const handleRockspaperClick = () => {
    window.location.href = '/Rockspaper'
  };
  
  return (

    <div className="sidenav">
      <img className="sidenav__logo" src="https://i.ibb.co/QmNchPf/dotori.png" alt="" />

      <div className="sidenav__buttons">
        <button type="button" className="sidenav__button" onClick={handleHomepageClick}>
          <HomeIcon />
          <span>Home</span>
        </button>

        <button type="button" className="sidenav__button"onClick={handleNewsClick}>
          <SearchIcon />
          <span>News</span>
        </button>

        <button type="button" className="sidenav__button" onClick={handleMapClick}>
          <ExploreIcon />
          <span>Map</span>
        </button>

        <button type="button" className="sidenav__button" onClick={handleWeatherClick}>
          <SlideshowIcon />
          <span>Weather</span>
        </button>

        <button type="button" className="sidenav__button"onClick={handleRandomClick}>
          <ChatIcon />
          <span>Random</span>
        </button>

        <button type="button" className="sidenav__button" onClick={handleInformationClick}>
          <FavoriteBorderIcon />
          <span>Information</span>
        </button>

        <button type="button" className="sidenav__button"onClick={handleRockspaperClick}>
          <AddCircleOutlineIcon />
          <span>RockScissorsPaper</span>
        </button>

      </div>
      <div className="sidenav_more">
        <button type="button" className="sidenav_button">
          <MenuIcon />
          <span>More</span>
        </button>

        
      </div>


    </div>
  );
}

export default Sidenav;