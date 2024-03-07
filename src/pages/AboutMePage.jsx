import * as React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import './AboutMePage.css'
import { Link } from 'react-router-dom'


const AboutMePage = () => {
    return (
        <>
            <AppBarComponent />
            <div className='about-content'>

                <div className='image-slide'>

                    <img src="/images/1.jpg" alt="me" width={350} height={250} />
                    <img src="/images/2.jpg" alt="me" width={350} height={250} />
                    <img src="/images/3.jpg" alt="me" width={350} height={250} />

                </div>

                <div className='abouts'>

                    <div className='about-items'>
                        <h1>About Me</h1>
                        <hr />
                    </div>
                    <div className='about-items'>
                        <h2>Who Am I?</h2>
                        <p>
                            My name's <strong><i>Kely Saina</i></strong>. I am a college student majoring in General Computer Science at <strong><i>ENI, Fianarantsoa</i></strong>.
                        </p>
                        <p>
                            I have a strong interest in <strong><i>Cloud Computing</i></strong> and I aspire to be a <strong><i>DevOps</i></strong> engineer.
                        </p>
                        <p>
                            I am currently available to work as a freelance. Feel free to <b><Link to="/contact" className='contact-link'>Contact</Link></b> me.
                        </p>
                    </div>
                    <div className='about-items'>
                        <h2>My Educations</h2>
                        <p>
                            <ul>
                                <li>
                                    <b>2022-2023</b> | <i>ENI, Fianarantsoa</i> <br />
                                    Bachelor's degree in General computer Science <br />
                                    Internship at OpenData-Madagascar, Antsirabe <br />
                                    -CI/CD of a NodeJS API with Jenkins
                                </li>
                                <li>
                                    <b>2021-2022</b> | <i>ESD, Antananarivo</i> <br />
                                    Internship as Network administrator <br />
                                    -Captive portal using CentOS
                                </li>
                                <li>
                                    <b>2019</b> | <i>Saint Joseph High School, Antsirabe</i> <br />
                                    Baccalaureate Serie C
                                </li>
                            </ul>
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AboutMePage