// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    const blog = [
        {
            id: 1,
            type: "admin",
            date: "JAN. 18, 2021",
            com: "3 COMMENTS ",
            title: "Build your Dream Software & Engineering Career",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            cover: "../images/blog/b1.webp",
        },
        {
            id: 2,
            type: "admin",
            date: "API. 25, 2022",
            com: "5 COMMENTS ",
            title: "Build your Dream Software & Engineering Career",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            cover: "../images/blog/b2.webp",
        },
        {
            id: 3,
            type: "user",
            date: "MAY. 15, 2022",
            com: "10 COMMENTS ",
            title: "Build your Dream Software & Engineering Career",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            cover: "../images/blog/b3.webp",
        },
        {
            id: 4,
            type: "admin",
            date: "JAN. 02, 2022",
            com: "3 COMMENTS ",
            title: "Build your Dream Software & Engineering Career",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            cover: "../images/blog/b4.webp",
        },
        {
            id: 5,
            type: "admin",
            date: "DEC. 14, 2022",
            com: "3 COMMENTS ",
            title: "Build your Dream Software & Engineering Career",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            cover: "../images/blog/b5.webp",
        },
        {
            id: 6,
            type: "user",
            date: "JAN. 18, 2021",
            com: "12 COMMENTS ",
            title: "Build your Dream Software & Engineering Career",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            cover: "../images/blog/b6.webp",
        },
    ];

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
                    <div className="box logo">
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
                    <div className='box'>
                        <h3>Recent Post</h3>
                        {blog.slice(0, 3).map((val, index) => (
                            <div className='items flexSB' key={index}>
                                <div className='img'>
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className='text'>
                                    <span>
                                        <i className='fa fa-calendar-alt'></i>
                                        <label htmlFor=''>{val.date}</label>
                                    </span>
                                    <span>
                                        <i className='fa fa-user'></i>
                                        <label htmlFor=''>{val.type}</label>
                                    </span>
                                    <h4>{val.title.slice(0, 40)}...</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='box last'>
                        <h3>Have a Questions?</h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +2 392 3929 210
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                info@yourdomain.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
