import React from "react"

import '../styles/pages/call-to-action.scss';

const CallToAction = () => {
  return (
    <section className="CallToAction">
      <div className="row">
        <div className="CallToAction__box">
          <div className="CallToAction__content">
            <div className="col-1-of-3">
              <h1 className="title">Start a project</h1>
            </div>
            <div className="col-1-of-3">
              <p className="text">Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
            </div>
            <div className="col-1-of-3">
              <a href="#" class="btn btn--outline">Lets do this</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction