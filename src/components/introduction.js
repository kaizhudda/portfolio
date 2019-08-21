import React from "react"
import '../styles/pages/introduction.scss';

const Introduction = () => {
  return (
    <section className="Introduction">
      <div className="row centered">
        <div className="Introduction__content">
          <h1 className="title">Hi, I’m Kaiz. Nice to meet you.</h1>
          <h2 className="description">
            A versatile Front-End Developer with 3 years of experience leveraging React, Redux 
            and JavaScript to build commercial web-based applications for top New Zealand companies 
            in the telecommunications, energy and healthcare sectors. Focused on engineering and 
            delivering user centric solutions for achieving greater customer satisfaction. 
            Thrive in working in a collaborative agile environment to deliver high quality products.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Introduction