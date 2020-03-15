import { useStaticQuery, graphql } from "gatsby"

export const useLayoutQuery = () => {
  const layout = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return layout
}
