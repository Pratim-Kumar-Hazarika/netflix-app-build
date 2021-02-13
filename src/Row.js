import React from 'react';
import './Row.css';
import axios from './axios';
import {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title,fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const base_url ="https://image.tmdb.org/t/p/original/";
    const [trailerUrl , setTrailerUrl] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    },[fetchUrl])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleClick = (movie) =>{
          if(trailerUrl){
              setTrailerUrl('');
          }else{
              movieTrailer(movie?.name || "")
              .then(url=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
              })
              .catch((error)=> console.log(error));
          }
      };
    return (
        <div className="row">
         <h2>{title}</h2>
        <div className="row_posters">
    
            {movies.map((movie)=> ( 
                <img 
                onClick ={()=>handleClick(movie)}
                className ={`row_poster ${isLargeRow && "row_LargePoster"}`}
                key = {movie.id}
                src= {`${base_url}${movie.poster_path}`}
                // src={`${base_url}${isLargeRow? movie.backdrop_path : movie.poster_path}`}
                alt={movie.name}/>        
            ))}
        </div>
             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
