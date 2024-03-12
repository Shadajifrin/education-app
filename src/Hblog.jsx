// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './components/Title'
const Hblog = () => {
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
        <div >
            <section className='homeBlog'>
                <div className='container'>
                    <Title subtitle="our blog" title="recent from blog" />
                    <div className='blog'>
                        <div className='grid2'>
                            {blog.slice(0, 3).map((val, index) => (
                                <div className="items shadow" key={index}>
                                    <div className="blog-img">
                                        <img src={val.cover} alt='' />
                                    </div>
                                    <div className="blog-text">
                                        <div className="admin flesSB">
                                            <span>
                                                <i className='fa fa-user'></i>
                                                <label htmlFor=''>{val.type}</label>
                                            </span>
                                            <span>
                                                <i className='fa fa-calendar-alt'></i>
                                                <label htmlFor=''>{val.date}</label>
                                            </span>
                                            <span>
                                                <i className='fa fa-comments'></i>
                                                <label htmlFor=''>{val.com}</label>
                                            </span>
                                        </div>
                                        <h1>{val.title}</h1>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hblog
