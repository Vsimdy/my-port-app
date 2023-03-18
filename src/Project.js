import React from "react";
import animform from "./images/animform.png";
import login from "./images/login.png";
import weather from "./images/weather.png";
import todo from "./images/todo.png";
import myportapp from "./images/myportapp.png";

export default function Project(){

    return(
        <>
        <div  id="projectId">
               <h3 className="project-header">PROJECTS</h3>

            <div className="flex-container">

            <div className="flex-items">
                <a href="https://dulcet-sawine-eaaacf.netlify.app/" targer="_blank">
                    <img src={todo} alt="project"></img>
                </a>

                 <p>
                    <h4>A SIMPLE TO-DO APP</h4>
                    <p>This app is created with HTML-CSS-JAVASCRIPT</p>
                 </p>

                </div>

                <div className="flex-items">
                <a href="https://melodic-malasada-9b15e4.netlify.app/" targer="_blank">
                     <img src={animform} alt="project"></img>
                </a>

                <p>
                <h4>ANIMATED FORM</h4>
                    <p>A simple animated form created with HTML-CSS</p>
                </p>

                </div>

                <div className="flex-items">
                <a href="https://dulcet-sawine-eaaacf.netlify.app/" targer="_blank">
                     <img src={weather} alt="project"></img>
                </a>

                <p>
                <h4>WEATHER APP</h4>
                    <p>Created with HTML-CSS-JAVASCRIPT and API. provides the weather forcast for every city</p>
                </p>

                </div>

                <div className="flex-items">
                <a href="https://stalwart-marigold-12062c.netlify.app/" targer="_blank">
                     <img src={login} alt="project"></img>
                </a>

                <p>
                <h4>ISHRAI</h4>
                    <p>A website created for ishrai-ng with NEST.JS</p>
                </p>

                </div>


                <div className="flex-items">
                <a href="https://stalwart-marigold-12062c.netlify.app/" targer="_blank">
                     <img src={login} alt="project"></img>
                </a>

                <p>
                <h4>RESPONSIVE FORM</h4>
                    <p>Check out this responsive form created with HTML-CSS</p>
                </p>

                </div>
                 
                <div className="flex-items">
                <a href="https://playful-llama-3e4297.netlify.app/" targer="_blank">
                     <img src={myportapp} alt="project"></img>
                </a>

                <p>
                    <h4>MY PORTFOLIO</h4>
                    <p>This is my portfolio site, created with HTML-CSS-JAVASCRIPT-REACT</p>
                </p>

                </div>
            </div>
            </div>
        </>
    )
}