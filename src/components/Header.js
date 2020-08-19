import React from 'react'

const Header = (props) => {
    return (
        <div className='resumee__header'>
            <h4>Resume</h4>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Header
