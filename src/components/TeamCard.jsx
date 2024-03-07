// eslint-disable-next-line no-unused-vars
import React from 'react'

const TeamCard = () => {
    const team = [
        {
          cover: "./images/team/t1.webp",
          name: "Ph.D Adrian Molises",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
        {
          cover: "./images/team/t2.webp",
          name: "Ph.D Arthur MaGregor",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
        {
          cover: "./images/team/t3.webp",
          name: "Ph.D Anna Hanzen",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
        {
          cover: "./images/team/t4.webp",
          name: "Ph.D Brian Wooden",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
        {
          cover: "./images/team/t5.webp",
          name: "Ph.D Adrian Molises",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
        {
          cover: "./images/team/t6.webp",
          name: "Ph.D Arthur MaGregor",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
        {
          cover: "./images/team/t7.webp",
          name: "Ph.D Anna Hanzen",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
        {
          cover: "./images/team/t8.webp",
          name: "Ph.D Brian Wooden",
          work: "DEVELOPER AND LEAD INSTRUCTOR",
        },
      ];
    return (
    <div>
       <section className='team padding'>
            <div className='container grid'>
      {team.map((val,index)=>(
        <div className='team-items shadow' key={index}>
          <div className='team-img' >
            <img src={val.cover} alt=''/>
            <div className='overlay'>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>  
                <i className='fab fa-tiktok icon'></i>
            </div>
            </div>
            <div className='team-details'>
                <h2>{val.name}</h2>
                <p>{val.work}</p>
            </div>
          </div>
      ))}
      </div>
      </section>
    </div>
  )
}

export default TeamCard
