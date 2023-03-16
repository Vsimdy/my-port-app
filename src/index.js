import React from "react";
import  {createRoot}  from "react-dom/client";
import "./index.css";
import NavBar from "./NavBar.js";
import Intro from "./Intro.js";
import About from "./About.js";
import Project from "./Project.js";
import Stack from "./Stack.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

function App(props){
    return(
        <>
            <NavBar/>
            <Intro/>
            <About/>
            <Stack></Stack>
            <Project/>
            <Contact/>
            <Footer/>
        </>
    )
}

const root = document.getElementById("root");
createRoot(root).render(<App></App>);
