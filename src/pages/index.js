import React from "react"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import DesignerDeveloper from "../components/designer-developer"

import DesignerBgImage from "../images/gatsby-astronaut.png"

console.log(DesignerBgImage)

const IndexPage = props => (
  
  <Layout>
    <SEO title="Home" />

    <Hero />

    <DesignerDeveloper
      position="right"
      title="Designer"
      backgroundImage="DesignerBgImage`"
      
      content="I have a passion for all things creative, from interior design through to web design. I’m experienced in web design project serving both the UK and US in a range of different sectors."
    />

    <DesignerDeveloper
      position="left"
      title="Developer"
      backgroundImage="DeveloperBgImage"
      content="I have experience in creating custom WordPress themes with speed and accessability in mind. I use Git version control to colaborate on projects across the company I currently work as well an using SCSS and jQuery to enhance UI elements.

      I’ve been teaching myself React JS in my spare time as well as experimenting with Gatsby, Netlify and other web technologies to progress my skillset."
    />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    designerBgImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    developerBgImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;