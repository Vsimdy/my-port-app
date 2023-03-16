import React from "react";
import "./index.css";
import avater from "./images/avater.png";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import Whatsapp from "./images/whatsapp.png";
import email from "./images/email.jpg";


export default function Intro(){

    return(
        <>
          <div className="intro-container">

    <div className="desc">
        <h1 className="title">FRONTEND DEVELOPER</h1>
    </div>

    <div className="intro">

        <div className="intro-text">

        <p>
I'm a certified professional React Frontend Developer,
Digital marketer, and search engine expert. Focused on creating state-of-the-art web and mobile architecture and great 
 web experience.
        </p>

     <div className="btn-container">
     <a href="#contactId"><button className="contact-btn">Contact Me</button></a>
     <a href="#contactcontainer"><button className="resume-btn"> VIew Resume <i className="bi bi-arrow-up-right"></i></button></a>
     </div>

        </div>

        <div className="img-container">
           <img src={avater} alt="Avater" className="avater"/>
        </div>
    </div>

    <div className="social-icon">
            <a href="https://twitter.com/Makhi_cro" target="_blank" rel="noreferrer">
                <img src={twitter} alt="twitter"/>
            </a>

            <a href="https://www.linkedin.com/in/victor-chibuzor-52005a20a/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin"/>
            </a>

            <a href="https://github.com/Vsimdy" target="_blank" rel="noreferrer">
            <img src={github} alt="github"/>
            </a>

            <a href="https://wa.link/1wjn8k" target="_blank" rel="noreferrer">
            <img src={Whatsapp} alt="whatsapp"/>
            </a>

            <a href="mailto:chibuzorvictor97@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="email"/>
            </a>
    </div>
       </div>
        </>
    )
}