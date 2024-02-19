import React from 'react'
import instructions from '../img/instructions.jpeg'

const Header = () => {
    return (
        <header className="header">
            <img src={instructions} className='img-instructions'/>
        </header>
    )
}

export default Header