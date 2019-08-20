import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";
import CTA from "../components/call-to-action";

import '../styles/pages/index.scss'

class BlogIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title={"index"}>
        <SEO title="Home" />
        <CTA />
        <Footer />
        <Link to="/blog">Blog</Link>
      </Layout>
    )
  }
}

export default BlogIndex
