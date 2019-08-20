import React from "react"
import styled from "styled-components"
import SocialMedia from "./social-media"

import '../styles/pages/social-media.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="row centered">
        <div className="col-1-of-3">
          <FooterTitle>Living, learning, & leveling up one day at a time.</FooterTitle>
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}

export default Footer

const FooterTitle = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.4rem;
  font-weight: 400;
  margin: 2rem auto;
  text-align: center;
`