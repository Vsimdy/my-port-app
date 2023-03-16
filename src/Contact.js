import React from "react";

export default function Contact(){
 
    return(
        <>
           <div className="contactcontainer" id="contactId">
            <h3> <i class="bi bi-envelope-fill"></i> GET IN TOUCH</h3>
            
            <form method="post" action="https://formspree.io/f/xjvdrngv">
                <label for="firstName">NAME </label>
                <input type="text" name="name" placeholder="Full Name" required/>

                <label for="email">EMAIL</label>
                <input type="email" name="_replyto" placeholder="Example@gmail.com" required/>

                <label for="textArea">MESSAGE</label>
                <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
 
        </>
    )

}