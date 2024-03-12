// eslint-disable-next-line no-unused-vars
import React from 'react'

const PriceCard = () => {
    const price = [
        {
          name: "BASIC PLAN",
          price: "49K",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          name: "BEGINNER PLAN",
          price: "79K",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          name: "PREMIUM PLAN",
          price: "109K",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          name: "ULTIMATE PLAN",
          price: "149K",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
      ];
  return (
    <div>
         <section className='price padding'>
        <div className='container grid'>
      {price.map((val,index)=>(
      <div className='price-items shadow' key={index}>
      <h4>{val.name}</h4>
      <h1>
        <span> $ </span>
        {val.price}
      </h1>
      <p>{val.desc}</p>
      <button className='outline-btn'>GET STARTED</button>
      </div>  
      ))}
      </div>
     </section>
    </div>
  )
}

export default PriceCard
