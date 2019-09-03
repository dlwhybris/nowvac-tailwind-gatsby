import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Hero() {
  return (
    <StaticQuery
      query={heroQuery}
      render={data => {
        return (
          <div className="max-w-full">
            <Img
              fluid={data.hero.childImageSharp.fluid}
              className="w-full lg:h-120 h-40 object-cover opacity-75"
            />
          </div>

        )
      }}
    />
  )
}

const heroQuery = graphql`
  query HeroQuery {
    hero: file(relativePath: { eq: "img/stock/cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
