import React from "react";
import html from "./images/html.png"
import css from "./images/css.png"
import jquery from "./images/jquery.png"
import bootstrap from "./images/bootstrap.jpg"
import git from "./images/git.png"
import javascript from "./images/javascript.png"
import json from "./images/json.jpg"
import tailwind from "./images/tailwind.png"
import sass from "./images/sass.png"
import react from "./images/react.png"
import node from "./images/node.png"
import api from "./images/api.png"
import redux from "./images/redux.png"
import  Wordpress  from "./images/wordpress.jpg";

export default function Stack(){
    return(
        <>
        <section className="stack-container" id="stackId">
        <h3 className="stack-head"><i class="bi bi-stack"></i> My Stack</h3>
            <div className="stack">
                <h6><img src={html} alt="html"/>HTML</h6>
                <h6><img src={css} alt="css"/>CSS</h6>
                <h6><img src={javascript} alt="js"/>JAVASCRIPT</h6>
                <h6><img src={jquery} alt="js"/>JQUERY</h6>
                <h6><img src={react} alt="jsx"/>REACT.JS</h6>
                <h6><img src={redux} alt="redux"/>REDUX</h6>
                <h6><img src={node} alt="js"/>NODE.JS</h6>
                <h6><img src={bootstrap} alt="bootstrap"/>BOOTSTRAP</h6>
                <h6><img src={Wordpress} alt="woodpress"/>WORDPRESS</h6>
                <h6><img src={sass} alt="sass"/>SASS</h6>
                <h6><img src={api} alt="api"/>WEB APIs</h6>
                <h6><img src={json} alt="json"/>JSON</h6>
                <h6><img src={tailwind} alt="tcss"/>TAILWIND CSS</h6>
                <h6><img src={git} alt="git"/>GIT</h6>
            </div>
        </section>

        </>
    
        )
}