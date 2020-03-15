import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  ImageProps,
  EdgesImage,
  ImageRender,
} from "../interfaces/image-component.interface"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ filename, alt }: ImageProps) => {
  const imageQuery = graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `

  const imageRender = ({ images }: ImageRender) => {
    const image = images.edges.find(({ node }: EdgesImage) => {
      return node.relativePath.includes(filename)
    })

    if (!image) return null

    return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
  }

  return <StaticQuery query={imageQuery} render={data => imageRender(data)} />
}

export default Image
