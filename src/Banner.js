import React from 'react';
import './Banner.css';
import axios from './axios';
import requests from "./Requests";
import {useState,useEffect} from 'react';

export default function Banner() {
    const [movie, setMovies] = useState([]);
    const m = movie?.backdrop_path;
    console.log("helooooo",m);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request.data)
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
           return request;
        }
        fetchData()
    },[]);
    function truncate (string,n){
        return string?.length > n ? string.substr(0, n-1) +"...." : string;
    }
    return (
      <header 
      className ="banner"
      style ={{
          backgroundSize : "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
          backgroundPosition :"center center",
      }}
      >
        <div className="banner_contents">
            <h1 className="banner_Title"> {movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                <div className="banner_description">   {truncate(movie?.overview, 145)}</div>
            </div>
        </div>
            
         <div className="banner--fade"/>   
      </header>
    )
}
