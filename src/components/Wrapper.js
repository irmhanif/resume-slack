import React from 'react'
import Header from './Header'
import Skills from './Skills'
import WorkExp from './WorkExp'
import Education from './Education'
import Contact from './Contact'
import Projects from './Projects'

export default function Wrapper() {
    return (
        <div>
            <Header name='Mohamed Idris'/>
            <Skills />
            <WorkExp />
            <Education />
            <Projects />
            <Contact />
        </div>
    )
}
