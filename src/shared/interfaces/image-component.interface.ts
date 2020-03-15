export interface ImageProps {
  alt: string
  filename: string
}

export interface ImageRender {
  images: {
    edges: EdgesImage[]
  }
}

export interface EdgesImage {
  node: {
    childImageSharp: {
      fluid: Fluid
      id: string
    }
    id: string
    name: string
    relativePath: string
  }
}

interface Fluid {
  aspectRatio: number
  base64: string
  sizes: string
  src: string
  srcSet: string
}
