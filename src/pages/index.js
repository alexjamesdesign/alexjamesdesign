import React from "react"
 
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import DesignerDeveloper from "../components/designer-developer"
import Timeline from "../components/timeline"

 
import WordPressIcon from "../images/icon-wordpress.svg"
import ReactIcon from "../images/icon-react.svg" 
import GitIcon from "../images/icon-git.svg" 
import SassIcon from "../images/icon-sass.svg" 
import FigmaIcon from "../images/icon-figma.svg" 
import XDIcon from "../images/icon-xd.svg" 
import PhotoshopIcon from "../images/icon-photoshop.svg" 
import InvisionIcon from "../images/icon-invision.svg" 

 
import DesignerImage from "../images/designer-background.jpg"
import DeveloperImage from "../images/developer-background.jpg"
 
const devskills = [
  {
    name: 'React',
    icon: `${WordPressIcon}`,
    alt: 'React Icon'
  },
  {
    name: 'WordPress',
    icon: `${ReactIcon}`,
    alt: 'WordPress Icon'
  },
  {
    name: 'Git',
    icon: `${GitIcon}`,
    alt: 'Git Icon'
  },
  {
    name: 'Sass',
    icon: `${SassIcon}`,
    alt: 'Sass Icon'
  }
]
 
const designskills = [
  {
    name: 'XD',
    icon: `${XDIcon}`,
    alt: 'React Icon'
  },
  {
    name: 'Photoshop',
    icon: `${PhotoshopIcon}`,
    alt: 'Photoshop Icon'
  },
  {
    name: 'Figma',
    icon: `${FigmaIcon}`,
    alt: 'Figma Icon'
  },
  {
    name: 'Invision',
    icon: `${InvisionIcon}`,
    alt: 'Invision Icon'
  }
]
 
const IndexPage = (props) => (
 
  <Layout>
    <SEO title="Home" />
 
    <Hero />
 
    <div className="designer-developer-container">
 
      <DesignerDeveloper
        position="right"
        title="Designer"
        backgroundImage={DesignerImage}
        skillcat={designskills}
 
        content="I have a passion for all things creative, from interior design through to web design. I’m experienced in web design project serving both the UK and US in a range of different sectors from blinds to luxury swimming pools. I'm comfortable in a range of UI design and prototyping tools."
      />
 
      <DesignerDeveloper
        position="left"
        title="Developer"
        backgroundImage={DeveloperImage}
        skillcat={devskills}
 
        content="I have experience in creating custom WordPress themes with speed and accessability in mind. Using Git version control to collaborate on projects across the company I currently work as well an using SCSS and jQuery to enhance UI elements.
  
        I've been learning React JS in my spare time as well as experimenting with Gatsby, Tailwind CSS and other web technologies to progress my skillset."
      />
 
    </div>

    <Timeline />
 
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
  }
`;