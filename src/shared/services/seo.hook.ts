import { useStaticQuery, graphql } from "gatsby"

export const useSeoQuery = () => {
  const seo = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return seo
}
