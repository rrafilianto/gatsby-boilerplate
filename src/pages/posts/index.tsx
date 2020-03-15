import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../shared/components/layout"
import SEO from "../../shared/components/seo"
import {
  PostProps,
  DataMdx,
} from "../../shared/interfaces/post-pages.interface"

const Post = ({ data }: PostProps) => {
  const { edges } = data.allMdx

  const posts = edges.map(({ node }: DataMdx) => {
    const { id, excerpt, fields, frontmatter } = node
    const { title, author } = frontmatter

    return (
      <div key={id}>
        <header>
          <div>{title}</div>
          <div>Posting By {author}</div>
        </header>
        <p>{excerpt}</p>
        <Link to={fields.slug}>View Article</Link>
        <hr />
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Post" />
      <h1>Hi from the Post page</h1>
      <p>Welcome to Post page</p>
      {posts}
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`
