// eslint-disable-next-line no-unused-vars
import React from "react"
import Title from "./Title"
import OnlineCourse from "./OnlineCourse"
const HAbout = () => {
  const coursesCard = [
    {
      id: 1,
      cover: "../images/courses/c1.png",
      coursesName: "Introducing to Software Engineering",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by John Smith",
          totalTime: "50 lectures (190 hrs)",
        },
      ],
      priceAll: "$100 All Course",
      pricePer: "$15 per month",
    },
    {
      id: 2,
      cover: "../images/courses/c2.png",
      coursesName: "Enhancing Adobe Photoshop CC 2020 Skills",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Ram Gurung",
          totalTime: "30 lectures (125 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$25 per month",
    },
    {
      id: 3,
      cover: "../images/courses/c3.png",
      coursesName: "HTML, CSS, and Javascript for Web Developers",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Saroj Nepal",
          totalTime: "50 lectures (50 hrs)",
        },
      ],
      priceAll: "$50 All Course",
      pricePer: "$5 per month",
    },
    {
      id: 4,
      cover: "../images/courses/c4.png",
      coursesName: "Introducing to Programming with WordPress",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Prabin Thapa Mager",
          totalTime: "20 lectures (20 hrs)",
        },
      ],
      priceAll: "$30 All Course",
      pricePer: "$3 per month",
    },
    {
      id: 5,
      cover: "../images/courses/c5.png",
      coursesName: "Introducing to Programming with ReactJS",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Sunil Bishowkaram",
          totalTime: "100 lectures (150 hrs)",
        },
      ],
      priceAll: "$300 All Course",
      pricePer: "$30 per month",
    },
    {
      id: 6,
      cover: "../images/courses/c6.png",
      coursesName: "Learn Frontend Programming Language",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Sunil Bishowkaram",
          totalTime: "200 lectures (300 hrs)",
        },
      ],
      priceAll: "$500 All Course",
      pricePer: "$80 per month",
    },
    {
      id: 7,
      cover: "../images/courses/c7.png",
      coursesName: "Introducing to Programming with HTML / CSS",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Price",
          totalTime: "20 lectures (50 hrs)",
        },
      ],
      priceAll: "$20 All Course",
      pricePer: "$2 per month",
    },
    {
      id: 8,
      cover: "../images/courses/c8.png",
      coursesName: "Introducing to Programming with JAVA",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
    },
    {
      id: 9,
      cover: "../images/courses/c9.png",
      coursesName: "Introducing to with HTML / CSS / JAVASCRIPT",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "50 lectures (50 hrs)",
        },
      ],
      priceAll: "$20 All Course",
      pricePer: "$3 per month",
    },
  ];
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Title subtitle='our courses' title='explore our popular online courses' />

          <div className='courseCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val,index) => (
                <div className='course-items' key={index}>
                  <div className='content flex'>
                    <div className='course-left'>
                      <div className='course-img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='course-text'>
                      <h1>{val.coursesName}</h1>
                      <div className='course-rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='course-details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='course-price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className='outline-btn'>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OnlineCourse />
    </>
  )
}

export default HAbout
