import React from 'react';
import './Banner.css'

export default function Banner() {
    return (
      <header 
      className ="banner"
      style ={{
          backgroundSize : "cover",
          backgroundImage :`url("https://tipsmake.com/data/images/top-black-cover-photos-for-those-who-are-sad-picture-13-j3KHOP9sE.jpg")`,
          backgroundPosition :"center center",
      }}
      >
        <div className="banner_contents">
            <h1 className="banner_Title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                <div className="banner_description">Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.</div>
            </div>
        </div>
            
         <div className="banner--fade"/>   
      </header>
    )
}
