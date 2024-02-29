// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './Title'
const  OnlineCourse= () =>{
    const online = [
        {
          cover: "./images/courses/online/o1.png",
          hoverCover: "./images/courses/online/o1.1.png",
          courseName: "UI/UX Design Courses",
          course: "25 Courses",
        },
        {
          cover: "./images/courses/online/o2.png",
          hoverCover: "./images/courses/online/o2.1.png",
          courseName: "Art & Design",
          course: "25 Courses",
        },
        {
          cover: "./images/courses/online/o3.png",
          hoverCover: "./images/courses/online/o3.1.png",
          courseName: "Computer Science",
          course: "10 Courses",
        },
        {
          cover: "./images/courses/online/o4.png",
          hoverCover: "./images/courses/online/o4.1.png",
          courseName: "History & Archeologic",
          course: "15 Courses",
        },
        {
          cover: "./images/courses/online/o5.png",
          hoverCover: "./images/courses/online/o5.1.png",
          courseName: "Software Engineering",
          course: "30 Courses",
        },
        {
          cover: "./images/courses/online/o6.png",
          hoverCover: "./images/courses/online/o6.1.png",
          courseName: "Information Software",
          course: "60 Courses",
        },
        {
          cover: "./images/courses/online/o7.png",
          hoverCover: "./images/courses/online/o7.1.png",
          courseName: "Health & Fitness",
          course: "10 Courses",
        },
        {
          cover: "./images/courses/online/o8.png",
          hoverCover: "./images/courses/online/o8.1.png",
          courseName: "Marketing",
          course: "30 Courses",
        },
        {
          cover: "./images/courses/online/o9.png",
          hoverCover: "./images/courses/online/o9.1.png",
          courseName: "Graphic Design",
          course: "80 Courses",
        },
        {
          cover: "./images/courses/online/o10.png",
          hoverCover: "./images/courses/online/o10.1.png",
          courseName: "Music",
          course: "120 Courses",
        },
        {
          cover: "./images/courses/online/o11.png",
          hoverCover: "./images/courses/online/o11.1.png",
          courseName: "Business Administration",
          course: "17 Courses",
        },
        {
          cover: "./images/courses/online/o12.png",
          hoverCover: "./images/courses/online/o12.1.png",
          courseName: "Web Management",
          course: "17 Courses",
        },
      ];
      
  return (
    <div>
      <section className='online'>
        <div className='container'>
        <Title subtitle='COURSES' title="Browse Our Online Courses" />
        <div className='content grid3'>
            {online.map((val,index)=>(
                <div className='box' key={index}>
                    <div className='online-img'>
                        <img src={val.cover} alt=''/>
                        <img src={val.hoverCover} alt='' className='show'/>
                    </div>
                    <h1>{val.courseName}</h1>
                    <span>{val.course}</span>
                </div>
            ))}
        </div>
        </div>
      </section>
    </div>
  )
}

export default OnlineCourse
