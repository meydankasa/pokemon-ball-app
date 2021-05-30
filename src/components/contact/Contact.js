import React from 'react';
import './Contact.css'
const Contact = (props) => {
    console.log("Output =>: Contact -> props", props)
    return (
        <div className="container">
            <h4 className="center">contact</h4>
            <div className="center card">
                <span className="card-title" > My contact information  </span>
                <p className="card-action">
                <a href="https://www.gize.ajigo@gmail.com">Mail
                  </a><br></br>
                <a href="https://www.linkedin.com/in/gize-ajigo/">Linkedin</a>
                </p>
            </div>
        </div>


    );
}

export default Contact;


