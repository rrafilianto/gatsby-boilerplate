export interface PostProps {
  children: []
  data: {
    allMdx: {
      edges: DataMdx[]
    }
  }
  location: {}
  navigate: () => void
  pageContext: {}
  pageResources: {}
  path: string
  pathContext: {}
  uri: string
}

export interface DataMdx {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      author: string
      title: string
    }
    id: string
  }
}
