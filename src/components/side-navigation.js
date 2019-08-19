import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, fa } from '@fortawesome/free-solid-svg-icons'
import { faMedium, faTwitterSquare, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SideNavigation = (props) => {
  console.log(props);
  return (
    <SideNav>
      <Header>
        <FontAwesomeIcon icon={faUserCircle} />
      </Header>
      <Menu>
        <MenuItem>
          <Link to='/about' activeClassName="active">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/experience' activeClassName="active">Experience</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/projects' activeClassName="active">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/blog' activeClassName="active">Blog</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/contact' activeClassName="active">Contact</Link>
        </MenuItem>
      </Menu>
      <SocialMediaBar>
        <SocialItem>
          <FontAwesomeIcon icon={faInstagram} />
        </SocialItem>
        <SocialItem>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </SocialItem>
        <SocialItem>
          <FontAwesomeIcon icon={faGithubSquare} />
        </SocialItem>
        <SocialItem>
          <FontAwesomeIcon icon={faMedium} />
        </SocialItem>
      </SocialMediaBar>
    </SideNav>
  )
}

export default SideNavigation

const SideNav = styled.div`
    background-color: #282830;
    width: 225px;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    overflow: auto;
    z-index: 99;
    overflow-x: hidden;
    backface-visibility: none;
`

const Header = styled.div`
  text-align: center;
  padding: 16px 0 0;

  svg {
    font-size: 45px;
    color: #fcb740;
  }
`

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 16px;
  text-align: center;

  .active {
    border-left: 2px solid #ff1d6f;
  }
`

const MenuItem = styled.li`
  color: #9b9b9b;
  margin: 0;

  a:link,
    a:visited {
      padding: 9px;
      text-decoration: none;
      transition: all 0.2s;
      color: #9b9b9b;
      display: block;
    }

  a:hover {
    color: #ff6583;
  }

  a:active {
  }

  a.active {
    color: #ff1d6f;
  }
`

const SocialMediaBar = styled.ul`
  list-style: none;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  animation: moveInLeft 0.3s ease-out 0.5s;
  animation-fill-mode: backwards;

  @keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-5rem);
  }

  80% {
    opacity: 1;
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}
`

const SocialItem = styled.li`
  margin: 12px;
  color: #9B9B9B;

  svg {
    font-size: 0.9rem;
    transition: all 0.25s;

    &:hover {
      color: #ff6583;
      cursor: pointer;
      transform: scale(1.25);
    }
  }
`