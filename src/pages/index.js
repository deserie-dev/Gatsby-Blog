import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cloud Blog</h1>   
    <StaticQuery 
      query={indexQuery} 
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post 
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                path={node.frontmatter.path}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>  
        )
      }}
    /> 
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "Do MMM YYYY")
            path
            tags
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
