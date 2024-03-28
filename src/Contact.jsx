// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Back from './components/Back'
import Footer from './footer';


const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2300764.4912408697!2d76.42135263455393!3d9.970570143082359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710235938887!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }; const res = await fetch('https://react-contact-8145f-default-rtdb.firebaseio.com/FormData.json', options);
        if (res.ok) {
            alert('Message sent Successfully');
        } else {
            alert('Error Occurred');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className="flexSB">
                                <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
                                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
                            </div>
                            <input type='text' placeholder='Subject' name='subject' value={formData.subject} onChange={handleChange} required />
                            <textarea cols='30' rows='10' name='message' value={formData.message} onChange={handleChange} placeholder='Create a message here...' required>
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div >
            </section >
            <Footer/>
        </div >
    )
}

export default Contact
