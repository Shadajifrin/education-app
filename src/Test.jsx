// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './components/Title'

const Test = () => {
  const testimonal = [
    {
      id: 1,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t1.webp",
    },
    {
      id: 2,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t2.webp",
    },
    {
      id: 3,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t3.webp",
    },
  ];
  
  return (
    <div>
      <section className='testimonal padding'>
        <div className='container'>
          <Title subtitle="testimonal" title="our successful students" />
          <div className='content grid2'>
            {testimonal.map((val,index)=>(
              <div className='test-items shadow'key={index}>
                <div className='box flex'>
                  <div className='test-img'>
                    <img src={val.cover} alt=''/>
                    <i className='fa fa-quote-left icon'></i>
                    </div>
                    <div className='test-name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Test
