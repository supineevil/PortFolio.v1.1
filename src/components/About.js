import React, { useState } from 'react';
import '../CSS/About.css';
// import avatar from './Images/avatar2.jpeg';

export default function About() {
   const [toggleState,setToggleState]=useState(1);
   const toggleTab=(idx)=>{
        setToggleState(idx);
   }
  return (
    <>
    <div className='about' id="abt">
        <div className="container ">
            <div className="row">
                <div className="about-col-1">
                    <i className="fa fa-address-card"></i>
                </div>
                <div className="about-col-2">
                    <h1 className='sub-title'> <i class="fa-hashtag"></i> About Me</h1>
                    <p className='about-me'>I am a passionate CSE software engineering student with a strong desire to create innovative solutions.With hands-on experience in various projects, I have honed my problem-solving and collaborative skills. I stay updated with the latest technologies and thrive in dynamic environments. My goal is to make a positive impact by developing user-centric software solutions. Ready to contribute to a team that values creativity and growth.</p>
                    <div className="tab-title">
                        <p className={toggleState===1?"tab-links active-link":"tab-links"} onClick={()=>toggleTab(1)} >Skills</p>
                        <p className={toggleState===2?"tab-links active-link":"tab-links"} onClick={()=>toggleTab(2)}>Education</p>
                        <p className={toggleState===3?"tab-links active-link":"tab-links"} onClick={()=>toggleTab(3)}>Achievments</p>
                    </div>
                    <div className={toggleState===1?"tab-contents active-tab":"tab-contents"}>
                        <ul>
                            <li><span>Problem Solving</span><br/>C/C++, JAVA , Python</li>
                            <li><span>Website Development</span><br/> HTML , CSS , JavaScript , React.js</li>
                            <li><span>Technical Skills</span><br/> Git , Github , Bootstrap ,Tailwind , SQL , MongoDB</li>
                            <li><span>Languages</span><br/>English , Hindi , Bengali</li>
                        </ul>
                    </div>
                    <div className={toggleState===2?"tab-contents active-tab":"tab-contents"}>
                        <ul>
                            <li><span>2018</span><br/>AISSE-83%</li>
                            <li><span>2020</span><br/>AISSCE-88%</li>
                            <li><span>2024</span><br/>B.Tech CSE - 9.5 CGPA</li>
                        </ul>
                    </div>
                    <div className={toggleState===3?"tab-contents active-tab":"tab-contents"}>
                        <ul>
                            <li><span>GFG</span><br/>Ranked top 5 in College ranking</li>
                            <li><span>Leetcode</span><br/>Highest contest ranking - 2465</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
