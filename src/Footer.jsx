// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="newsletter">
                <div className="container flexSB">
                    <div className='left row'>
                        <h1>Newsletter -Stay tune and get the latest update</h1>
                        <span>far far away,behind the world mountains</span>
                    </div>
                    <div className="right row">
                        <input type='text' placeholder='Enter email address' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container padding">
                    <div className="foot-box logo">
                        <h1>ACADEMIA</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-instagram icon'></i>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Courses</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
