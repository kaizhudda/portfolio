import React from "react"
import '../styles/pages/introduction.scss';

const Introduction = () => {
  return (
    <section className="Introduction">
      <div className="row centered">
        <div className="Introduction__content">
          <h1 className="title">Hi, I’m Kaiz. Nice to meet you.</h1>
          <h2 className="description">
            Since beginning my journey as a freelance designer nearly 8 years ago, 
            I've done remote work for agencies, consulted for startups, 
            and collaborated with talented people to create digital products 
            for both business and consumer use. I'm quietly confident, naturally curious, 
            and perpetually working on improving my chops one design problem at a time.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Introduction