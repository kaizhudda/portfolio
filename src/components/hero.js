import React from "react"
import '../styles/pages/hero.scss';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="row centered">
        <div className="Hero__content">
          <h1 className="title">Frontend Developer</h1>
          <h2 className="description">
            I design and code beautifully simple things, and I love what I do
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero