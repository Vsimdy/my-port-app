import React from "react";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import Whatsapp from "./images/whatsapp.png";
import email from "./images/email.jpg";

export default function Footer(){
    return(
        <>
        <div className="footer">
        <hr/>
            <div className="social-icon">
            <a href="https://twitter.com/Makhi_cro" target="_blank"  rel="noreferrer">
                <img src={twitter} alt="twitter"/>
            </a>

            <a href="https://www.linkedin.com/in/victor-chibuzor-52005a20a/" target="_blank"  rel="noreferrer">
            <img src={linkedin} alt="linkedin"/>
            </a>

            <a href="https://github.com/Vsimdy" target="_blank"  rel="noreferrer">
            <img src={github} alt="github"/>
            </a>

            <a href="https://wa.link/1wjn8k" target="_blank"  rel="noreferrer">
            <img src={Whatsapp} alt="whatsapp"/>
            </a>

            <a href="mailto:chibuzorvictor97@gmail.com" target="_blank"  rel="noreferrer">
            <img src={email} alt="email"/>
            </a>
        </div>   

            <p>&copy;2023 Chibuzor Victor</p>
    </div>
        </>
    )
}