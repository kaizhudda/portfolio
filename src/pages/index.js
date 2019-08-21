import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";
import CTA from "../components/call-to-action";
import Companies from "../components/companies";
import Introduction from "../components/introduction";
import Hero from "../components/hero";

import '../styles/pages/index.scss'

class BlogIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title={"index"}>
        <SEO title="Home" />
        <Hero />
        <Introduction />
        <Companies />
        <CTA />
        <Footer />
        <Link to="/blog">Blog</Link>
      </Layout>
    )
  }
}

export default BlogIndex
