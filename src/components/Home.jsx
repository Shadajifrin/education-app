// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './Title'
import AboutCard from './AboutCard'
import HAbout from './HAbout'
import Test from '../Test'
import Hblog from '../Hblog'
import Hprice from '../Hprice'
function Home() {
  // eslint-disable-next-line react/prop-types
  return (
    <div>
<section className='home'>
  <div className='container flexSB'>
    <div className='row'>
    <Title  subtitle='WELCOME TO ACADAMIA' title='Best Online Education'/>
      <p className='home-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, temporibus ratione accusamus possimus tenetur aspernatur neque eius consectetur fugiat aperiam officia dolor dolores, iusto quis exercitationem eligendi vitae et? Quam?</p>
      <div className='button-home'>
        <button className='primary-btn'>
          GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
        </button>
        <button>
          VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
  </div>
</section>
<div className='margin'></div>
<AboutCard />
<HAbout />
<Test />
<Hblog />
<Hprice/>
    </div>
  )
}

export default Home
