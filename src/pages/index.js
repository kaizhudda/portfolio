import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMedia from "../components/social-media"

import '../styles/pages/index.scss'

class BlogIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title={"index"}>
        <SEO title="Home" />
        <footer className="Footer">
          <div className="row centered">
            <div className="col-1-of-3">
              <FooterTitle>Living, learning, & leveling up one day at a time.</FooterTitle>
              <SocialMedia />
            </div>
          </div>
        </footer>
        <Link to="/blog">Blog</Link>
      </Layout>
    )
  }
}

export default BlogIndex

const FooterTitle = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.4rem;
  font-weight: 400;
  margin: 2rem auto;
  text-align: center;
`