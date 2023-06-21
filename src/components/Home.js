import React from 'react'
import "../CSS/Home.css";
import  avatar from'./Images/avatar.jpeg';

export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        
        <div className="item">
        <img src={avatar} alt="Avatar"/>
        <span className="caption"> Software Engineer</span>
        </div>
        <div className="intro">
          <p>Hello , I am <span>Raunak Ghosh</span></p>
          <div className="description">
          I am a Software Engineering student that welcome challenges and architects creative solutions .
          </div>
        <a classname="link" href="https://www.linkedin.com/in/raunak-ghosh-2a81591b6/"><div className="button"> Connect + </div></a>
        </div>  
      </div>
    </div>
  )
}
