import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import { PostLayoutProps } from "../interfaces/post-layout-component.interface"

const PostLayout = ({ children, pageContext }: PostLayoutProps) => {
  const { title, author, date } = pageContext.frontmatter
  const newDate = new Date(date).toLocaleDateString()

  return (
    <Layout>
      <SEO title={title} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span> &nbsp;
          <time>Date: {newDate}</time>
        </header>
        {children}
      </article>
      <Link to="/posts">Go back to the posts</Link>
    </Layout>
  )
}

export default PostLayout
