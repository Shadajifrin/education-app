// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './Title'
import Awrapper from './Awrapper';

const AboutCard = () => {
  const homeAbout = [
    {
      id: 1,
      cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
      title: "Online Courses",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      cover: "https://img.icons8.com/ios/80/000000/diploma.png",
      title: "Earn A Certificates",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      cover: "https://img.icons8.com/ios/80/000000/athlete.png",
      title: "Learn with Expert",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];


  return (
    <div>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left-row'>
            <img src='./src/assets/about.webp' />
          </div>
          <div className='right-row'>
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
            {homeAbout.map((val) => (
                <div className='items-flexSB' key={val.id}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </div>
  )
}

export default AboutCard
