import React from 'react'

export default function Skills() {
    return (
      <div className="skill__box">
        <div className="com_Head">
          <hr />
          <h3>SKILLS</h3>
          <hr />
        </div>
        <div className="skills__data">
          <div className="resumee__datum">
            <label>Languages</label>
            <p>PHP, Javascript</p>
          </div>
          <div className="resumee__datum">
            <label>Database</label>
            <p>MySql</p>
          </div>
          <div className="resumee__datum">
            <label>Web Technology</label>
            <p>HTML, CSS, React.js, Bootstrap4, JQuery</p>
          </div>
          <div className="resumee__datum">
            <label>Tools</label>
            <p>VS Code, MySQL Workbench</p>
          </div>
        </div>
      </div>
    );
}
