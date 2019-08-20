import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { Container } from '../styles/layout';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges
    console.log(data);
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <Heading>
          <HeadingTitle>Blog</HeadingTitle>
        </Heading>
        {/* <Bio /> */}
        <Container>
          {posts.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <BlogPost key={node.slug}>
                <header>
                  <BlogTitle
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.slug}>
                      {title}
                    </Link>
                  </BlogTitle>
                </header>
                <section>
                  <p>
                    {node.subtitle}
                  </p>
                </section>
              </BlogPost>
            )
          })}
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

const Heading = styled.div`
  height: 425px;
  background: #8C43FF;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 350px);
  /* transform: skewY(2deg); */
`

const HeadingTitle = styled.h3`
  color: white;
  font-size: 3.6rem;
`

const BlogPost = styled.article`
  padding: 40px;
  background: white;
`

const BlogTitle = styled.h3`
  font-size: 2.7rem;
  a:link, a:visited {
    text-decoration: none;
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          subtitle
          author
          slug
          image {
            fluid {
                src
            } 
          }
        }
      }
    }
  }
`
