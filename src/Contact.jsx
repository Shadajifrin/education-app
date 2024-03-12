// eslint-disable-next-line no-unused-vars
import React from 'react'
import Back from './components/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2300764.4912408697!2d76.42135263455393!3d9.970570143082359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710235938887!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
        <div>
            <Back title='Contact Us' />
            <section className='contact padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <iframe src={map}></iframe>
                    </div>
                    <div className="right row">
                        <h1>Contact Us</h1>
                        <p>We are open for any suggestion or just to have a chat</p>
                        <div className='items grid2'>
                            <div className='contact-box'>
                                <h4>ADDRESS:</h4>
                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                            <div className='contact-box'>
                                <h4>EMAIL:</h4>
                                <p> info@yoursite.com</p>
                            </div>
                            <div className='contact-box'>
                                <h4>PHONE:</h4>
                                <p> + 1235 2355 98</p>
                            </div>
                        </div>
                        <form action=''>
                            <div className="flexSB">
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create a message here...
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Contact
