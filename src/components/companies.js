import React from "react"
import genesisLogo from '../assets/genesis-logo.png';
import sparkLogo from '../assets/spark-logo.png';
import ohLogo from '../assets/orionhealth-logo.png';

import '../styles/pages/companies.scss';

const Companies = () => {
  return (
    <section className="Companies">
      <div className="row centered">
        <div className="col-1-of-2">
          <h1 className="title">I'm proud to have collaborated with some awesome companies</h1>
        </div>
      </div>
      <div className="row">
        <div className="Companies__content">
          <div className="col-1-of-4">
            <img src={sparkLogo} />
          </div>
          <div className="col-1-of-4 something">
            <img src={sparkLogo} className="spark-logo" />

          </div>
          <div className="col-1-of-4">
            <img src={sparkLogo} />
          </div>
          <div className="col-1-of-4">
            <img src={sparkLogo} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies