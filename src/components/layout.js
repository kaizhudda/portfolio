import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SideNavigation from './side-navigation';

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <LayoutWrapper>
        <SideNavigation location={location} />
        <LayoutContent>
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </LayoutContent>
      </LayoutWrapper>
    )
  }
}

export default Layout

const LayoutWrapper = styled.div`
  background: #fafafa;
  margin-left: 225px;
`

const LayoutContent = styled.section`
    margin-left: auto;
    margin-right: auto;
    /* max-width: ${rhythm(27)}; */
    padding: ${rhythm(1.5)} ${rhythm(1.5)};
    min-height: 100vh;
`