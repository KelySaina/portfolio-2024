import * as React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import './HomePage.css'

const HomePage = () => {

    const goTo = (page) => {
        window.location.href = page
    }

    return (
        <>
            <AppBarComponent />
            <div className='content'>
                <div className='leftSide'>
                    <img src="/images/me.jpg" alt="" srcset="" />
                </div>
                <div className='rightSide'>
                    <h1>My<br />Portfolio</h1>
                    <hr />
                    <p>
                        Welcome to my portfolio, an online presence for you to know more about me, my work experience and where we can get in touch quickly
                    </p>
                    <button onClick={() => goTo('/about-me')}>
                        Explore Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomePage