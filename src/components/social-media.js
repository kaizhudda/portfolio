import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faTwitter, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../styles/pages/social-media.scss';

const SocialMedia = () => {
  return (
    <SocialMediaBar>
      <SocialItem>
        <FontAwesomeIcon icon={faInstagram} />
      </SocialItem>
      <SocialItem>
        <a href="#" className="btn-social">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialItem>
      <SocialItem>
        <FontAwesomeIcon icon={faGithubSquare} />
      </SocialItem>
      <SocialItem>
        <FontAwesomeIcon icon={faMedium} />
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
  margin: 12px;
  color: #9B9B9B;
`