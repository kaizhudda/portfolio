import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title={"index"}>
        <SEO title="Home" />
        <Bio />
        <Link to="/blog">Blog</Link>
      </Layout>
    )
  }
}

export default BlogIndex
