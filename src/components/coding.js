import React from 'react';
import '../CSS/Coding.css';

export default function Coding() {
  return (
    <>
    <div className="coding" id="code">
        <div className="container">
          <div className="row-list">
            <h1 className="sub-title">My Profiles &nbsp;<i className="fa-solid fa-terminal"></i></h1>
            <div className="coding-list">
             <a href="https://auth.geeksforgeeks.org/user/raunakghosh1112/practice"> <div className='gfg'><h2>GeeksForGeeks</h2>
              <p>-------- Solved 400+ questions --------<br/><br/> ----- Ranked 4th in college ranking -----<br/><br/> ----- Highest streak of 150+ days -----<br/><br/> -------- 1500+ GFG points -------- <br/><br/> <u> MORE </u> </p></div> </a>
              
              <a href="https://leetcode.com/supineevil/"><div className='lc'><h2>Leetcode</h2>
              <p>-------- Solved 500+ questions --------<br/><br/>-- Ranked 2465 in global leetcode contest --<br/><br/> ----- Highest streak of 150+ days -----<br/><br/>--- Participated in multiple contests ---<br/><br/><u> MORE </u></p></div></a>
              <a href="https://www.hackerrank.com/raunakghosh1112"><div className='hr'><h2>Hackerrank</h2>
              <p>-------- Solved 400+ questions --------<br/><br/> ----- Gold Star in Problem solving -----<br/><br/> ----- Gold star in C++ language -----<br/><br/>--- Gold Star in Python language---<br/><br/><u> MORE </u></p></div></a>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}


