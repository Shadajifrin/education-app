// eslint-disable-next-line no-unused-vars
import React from 'react'
import BlogCard from './BlogCard'
import Back from './components/Back'
import Footer from './footer'

const blog = () => {
  return (
    <div>
        <Back  title="Blog Posts"/>
      <BlogCard />
      <Footer />
    </div>
  )
}

export default blog
