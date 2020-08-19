import React from 'react'

export default function Projects() {
    return (
      <div className="project__box">
        <div className="com_Head">
          <hr />
          <h3>PROJECTS</h3>
          <hr />
        </div>
        <div className="projects__data">
          <div className="resumee__datum">
            <label>France by French</label>
            <p>
              A Web Application developed build in Joomla CMS, PHP for Backend
              and HTML, CSS3 and Javascript for Frontend. It is a travel based
              website for french team who expecting Every Indians should visit
              France with thier budget with various packages with cart, booking,
              payment functionalities and also benefit of split payment option.
              <br />
              <strong>Link: </strong>
              <a
                href="https://www.francebyfrench.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.francebyfrench.com
              </a>
            </p>
          </div>
          <div className="resumee__datum">
            <label>Joy of Giving</label>
            <p>
              A Web Application developed build in Joomla CMS, PHP for Backend
              and HTML, CSS3 and Javascript for Frontend. This web app having
              features of login, registration. Registered user's are Owners of
              super market who wish to donate the vegetables for free or with
              minimal cost. With notifications and status of post.
            </p>
          </div>
          <div className="resumee__datum">
            <label>US Parts</label>
            <p>
              A Web Application developed build in Joomla CMS. Dynamic website
              for Product displaying.
            </p>
          </div>
          <div className="resumee__datum">
            <label>Movie Browser</label>
            <p>
              Single Page Application, developed using React Js and getting data
              from OMDB API. Using search bar, you can find movies cast,
              ratings, etc,..
              <br />
              <strong>Link: </strong>
              <a
                href="https://pwapp-reactjs.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                pwapp-reactjs.web.app
              </a>
            </p>
          </div>
          <div className="resumee__datum">
            <label>Portfolio</label>
            <p>
              My portfolio build in React Js, under construction :
              <span role="img" aria-label='img'>
                😇
              </span>
              <br />
              <strong>Link: </strong>
              <a
                href="https://irmhanif.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                irmhanif.github.io
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}
