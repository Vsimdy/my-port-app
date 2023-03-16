import React from "react";
import "./index.css";

export default function About(){
    return(
        <>
        
          <div className="aboutcontainer" id="aboutId">
          <div id="fancy"></div>
            <div>
                <h3> About Me <i class="bi bi-person-circle"></i></h3>

                <hr/>
                My name is Victor Chibuzor Chisimdindu, i am a graduate of the Univesity of Lagos,
                Nigeria (UNILAG), with a bachelor's degree in computer engineering and physiology, 
                an undergradute Electrical and Electronics engineering at the Federal University of Technology
                owerri, Nigeria.  I am a computer programmer, specialty in web front programming
                 (Frontend Web Development).
                 I am also a digital marketer, SEO/WPO specialist, with 
                a background in graphics designing.
                <p>I am passionate about technologies and most of its use cases, and i am looking
                 to explore. My current interest is on web and mobile development, cloud engineering,
                  machine learning and artificial intelligence. I am open to research and
                    collaborations.
                </p>
                <a href="#contactId" className="contact-btn">Let's connect</a>
                <hr/>
            </div>
    
        </div>  
        </>
    )
};