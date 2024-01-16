// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Head from './head'
function Header() {
    const[click,setClick]=useState(false)
  return (
    <div>
      <Head/>
      <header>
        <nav className='flexSB'>
            <ul className={click?'mobilenav':'flexSB'} onClick={()=>setClick(false)}>
                <li><Link to='/'></Link>Home</li>
                <li><Link to='/courses'></Link>All Courses</li>
                <li><Link to='/about'></Link>About</li>
                <li><Link to='/team'></Link>Team</li>
                <li><Link to='/pricing'></Link>Pricing</li>
                <li><Link to='/journal'></Link>Journal</li>
                <li><Link to='/contact'></Link>Contact</li>
            </ul>
            <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
            </div>
            <button className='toggle' onClick={()=>setClick(!click)}>
            {click?<i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}</button>
        </nav>
      </header>
    </div>
  )
}

export default Header
