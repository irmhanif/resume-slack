import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";

export default function Contact() {
    return (
      <div className="contact_box">
        <div className="com_Head">
          <hr />
          <h3>CONTACT</h3>
          <hr />
        </div>

        <div className="icons">
          <a href="tel:917010221314">
            <CallIcon />
          </a>
          <a href="mailto:irmhdeveloper@gmail.com">
            <MailIcon />
          </a>
          <a
            href="https://github.com/irmhanif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/irmh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    );
}
