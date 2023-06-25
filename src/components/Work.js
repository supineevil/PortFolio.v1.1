import React from 'react';
import '../CSS/work.css';
import  avatar1 from'./Images/CaseChanger.PNG';
import  avatar2 from'./Images/Portfolio.PNG';
import  avatar3 from'./Images/Temp.PNG';
export default function Work() {
  return (<>
  <div className="project" id="work">
        <div className="container">
        <div className="row-list">
            <h1 className="sub-title"><i className="fa-solid fa-laptop"></i>&nbsp;My Projects</h1>
            <div className="work-list">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <a href="https://text-player.netlify.app/"><img src={avatar1} class="d-block w-100" alt="..."/></a>
                    <div class="carousel-caption d-none d-md-block ">
                        <h1>Case Editor</h1>
                        <p>Can be used to change text and modify it and convert in to document</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <a href="https://nomad2304.netlify.app/"><img src={avatar2} class="d-block w-100" alt="..."/></a>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Portfolio Website</h1>
                        <p>Portfolio Website for professional photographer to showcase their skills</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <a href="https://text-player.netlify.app/"><img src={avatar3} class="d-block w-100" alt="..."/></a>
                    <div class="carousel-caption d-none d-md-block white-bg">
                        <h1>QR - Code Generator</h1>
                        <p>Generate Customized QR Code</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
