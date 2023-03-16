import React from "react";
import  {useState} from "react"

let menuIcon = <i className=" bi bi-list" id="menu-icon"></i>;
let cvIcon = <i className="bi bi-caret-down-fill"></i>;


export default function NavBar(){
   
const [open, setOpen] = useState(false);
const [cvState, setCvState] = useState(false);


 function menuClick(){
    setOpen(!open)
    iconSwitch();
    
}
console.log(open)


function iconSwitch(){
   menuIcon = <i className=" bi bi-x" id="menu-x-icon"></i>
   if(open){
    menuIcon = <i className=" bi bi-list" id="menu-icon"></i>
   }
}


function cvClick(){
    setCvState(!cvState)
    cvIconSwitch();
}


function cvIconSwitch(){
    cvIcon = <i className="bi bi-caret-up-fill"></i>
    if(cvState){
        cvIcon = <i className="bi bi-caret-down-fill"></i>
    }
}

    
        return(
            <nav className="App">

            <div id="menu">
            <button id="icon-btn"  onClick={menuClick}>{menuIcon}</button>
              <div className={`drop-menu-container ${open? "active": "inactive"}`}>
                <MenuItems />
              </div>
            </div>
  
              <div id="logo">
                  <span id="v">V</span>
                  <span id="s">S</span>
                  <span id="c">C</span>
              </div>
              
              
              <div id="cv-container">
                  <button onClick={cvClick}>
                      <input type="button" name="cv-btn" value="RESUME" id="cv-btn"/>
                      {cvIcon}
                  </button>
  
                  <div className={`resume-content ${cvState? "active": "inactive"}`}>
              <a href="https://map.eannaso.org/listing/improved-sexual-health-and-rights-advocacy-initiative/"  target="_blank"  rel="noreferrer">Download CV</a>
              <a href="https://map.eannaso.org/listing/improved-sexual-health-and-rights-advocacy-initiative/"  target="_blank"  rel="noreferrer">View CV</a>
                 </div>
  
              </div>
          </nav>
        )
        }

function MenuItems() {

 

        return(
            <>
              <a href="#aboutId">ABOUT</a>
              <a href="#stackId">STACK</a>
              <a href="#projectId">PROJECTS</a>
              <a href="#contactId">CONTACT</a>
            </> 
        )
}


