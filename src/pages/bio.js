import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Education from "../components/bio/Education"
import Banner from "../components/bio/Banner"

import Seo from "../components/seo"
import AboutMe from "../components/bio/AboutMe"
import Career from "../components/bio/Career"

const BlogIndex = ({ data, location }) => {

  console.log("data", data, location);

  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '50rem', margin: '0 auto' }}>
        <Banner/>
        <AboutMe/>
        <Career/>
        <Education/>
      </div>
    </Layout>
    
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

  export const pageQuery = graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `
