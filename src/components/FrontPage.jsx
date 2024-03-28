// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
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
          STUDENT LOGIN <i className='fa fa-long-arrow-alt-right'></i>
        </button>
        <Link to='/login'><button>
          ADMIN LOGIN <i className='fa fa-long-arrow-alt-right'></i>
        </button></Link>
      </div>
    </div>
  </div>
</section>
<div className='margin'></div>

    </div>
  )
}

export default Home
