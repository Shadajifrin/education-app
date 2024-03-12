// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Title from './Title'
const Faq = () => {
    const faq = [
        {
          title: "How to Enroll This Online Courses?",
          desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
        {
          title: "Where It is hidden by default, until the collapse?",
          desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
        {
          title: "How It is hidden by default, until the collapse?",
          desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
        {
          title: "How to Enroll This Online Courses?",
          desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
        {
          title: "Where It is hidden by default, until the collapse?",
          desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
        {
          title: "How It is hidden by default, until the collapse?",
          desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
      ];
      const [click,setClick]=useState(false)
      const toggle=(index)=>{
        if(click===index){
            return setClick(null)
        }
        setClick(index)
      }
  return (
    <div>
  <Title subtitle='FAQS' title='Frequently Ask Questions'/>
    <section className='faq'>
        <div className='container'>
            {faq.map((val,index)=>(
            <div className='faq-box' key={index}>
                 <button className='accordion' onClick={()=> toggle(index)} key={index}>
                    <h2>{val.title}</h2>
                    <span>{click===index? <i className='fa fa-chevron-down'></i>:<i className='fa fa-chevron-right'></i>}</span>
                 </button>
                 {click === index?(
                 <div className='faq-text'>
                    <p>{val.desc}</p>
                    </div>
                 ):null}
            </div>
            ))}
        </div>
    </section>
    </div>
  )
}

export default Faq
