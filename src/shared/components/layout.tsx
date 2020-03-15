/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import { useLayoutQuery } from "../services/layout.hook"
import { LayoutProps } from "../interfaces/layout-component.interface"
import "../../assets/styles/layout.scss"

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { site } = useLayoutQuery()

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
