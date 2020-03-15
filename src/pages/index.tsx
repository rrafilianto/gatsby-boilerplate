import React from "react"
import { Link } from "gatsby"

import Layout from "../shared/components/layout"
import Image from "../shared/components/image"
import SEO from "../shared/components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />
    </div>
    <Link to="/posts/">Go to Posts</Link>
  </Layout>
)

export default IndexPage
