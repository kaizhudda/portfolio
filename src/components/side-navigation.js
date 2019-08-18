import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

const SideNavigation = (props) => {
  console.log(props);
  return (
    <SideNav>
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
`

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 24px;
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