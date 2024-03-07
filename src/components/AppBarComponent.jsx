import * as React from 'react'
import './AppBarComponent.css'
import { Link } from 'react-router-dom'

const AppBarComponent = () => {
    return (
        <div class='header'>
            <div class='name'>
                <h3>
                    <Link to="/" className='nav-link'>Kely Saina</Link>
                </h3>
            </div>
            <div class='menus'>
                <ul>
                    <li><Link to="/" className='nav-link'>Home</Link></li>
                    <li><Link to="/about-me" className='nav-link'>About Me</Link></li>
                    <li><Link to="/my-projects" className='nav-link'>My Projects</Link></li>
                    <li><Link to="/contact" className='nav-link'>Contact Me</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default AppBarComponent