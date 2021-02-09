import React from 'react';
import './Nav.css';
import {useState,useEffect} from 'react';

function Nav() {
    const [state,setState] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY >100){
            setState(true)
        }else{
            setState(false)
        }
    };
     
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar);
        return ()=> window.removeEventListener('scroll',transitionNavBar);

    },[]);
    return (
        <div className={`nav ${ state && "nav_black"}`}>
            <div className="nav_contents">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="/"
                    className= "nav_logo"
                />
                <img
                    src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                    alt="/"
                    className= "nav_avator"
                />
            </div>      
        </div>
    )
}

export default Nav;
