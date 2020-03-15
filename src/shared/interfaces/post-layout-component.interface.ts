export interface PostLayoutProps {
  children: []
  location: {}
  navigate: () => void
  pageContext: {
    frontmatter: {
      author: string
      date: string
      path: string
      title: string
    }
  }
  pageResources: {}
  path: string
  pathContext: {}
  uri: string
}
