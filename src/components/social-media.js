import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMediumM, faTwitter, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../styles/pages/social-media.scss';

const SocialMedia = () => {
  return (
    <SocialMediaBar>
      <SocialItem>
        <a href="#" className="btn-social">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="#" className="btn-social">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="#" className="btn-social">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="#" className="btn-social">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </SocialItem>
    </SocialMediaBar>
  )
}

export default SocialMedia

const SocialMediaBar = styled.ul`
  list-style: none;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const SocialItem = styled.li`
  margin: 10px;
  color: #9B9B9B;
`