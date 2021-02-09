import React from 'react';
import './Banner.css'

export default function Banner() {
    function truncate (string,n){
        return string?.length > n ? string.substr(0,n-1) +"..." : string;
    }
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
                <div className="banner_description">{truncate("Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy familyhttps://tipsmake.com/data/images/top-black-cover-photos-for-those-who-are-sad-picture-13-j3KHOP9sE.jpg.",150)}</div>
            </div>
        </div>
            
         <div className="banner--fade"/>   
      </header>
    )
}
