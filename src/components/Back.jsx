// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
// eslint-disable-next-line react/prop-types
const Back=({title})=> {
    const location =useLocation()
  return (
    <div>
      <section className='back'>
        <h1>Home /{location.pathname.split("/")[1]}</h1>
       <h2>{title}</h2>
       <div className='margin'></div>
      </section>
     
    </div>
  )
}

export default Back
