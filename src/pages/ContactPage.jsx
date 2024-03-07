import * as React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import './ContactPage.css'

const ContactPage = () => {
    return (
        <>
            <AppBarComponent />
            <div className='contact-content'>
                <div className='side-image'>
                    <img src="/images/1.jpg" alt="contact" srcset="" />
                </div>

                <div className='contact'>
                    <h1>
                        My Contact
                    </h1>
                    <hr />
                    <p>
                        Thank you for reaching out to me!
                    </p>
                    <p>
                        If you want to discuss about any eventual collaboration, feel free to contact me through the links below.
                    </p>
                    <p>
                        <div className='contact-link'>
                            <img src="/icons/linkedin.png" alt="li-icon" className='icon' srcset="" />
                            <strong>
                                LinkedIn
                            </strong>
                        </div>
                        <div className='contact-link'>
                            <img src="/icons/mail.png" alt="mail-icon" className='icon' srcset="" />
                            <strong>
                                E-mail
                            </strong>
                        </div>
                        <div className='contact-link'>
                            <img src="/icons/whatsapp.png" alt="wa-icon" className='icon' srcset="" />
                            <strong>
                                WhatsApp
                            </strong>
                        </div>
                        <div className='contact-link'>
                            <img src="/icons/facebook.png" className='icon' alt="fb-icon" srcset="" />
                            <strong>
                                Facebook
                            </strong>
                        </div>
                    </p>
                </div>

            </div>
        </>
    )
}

export default ContactPage