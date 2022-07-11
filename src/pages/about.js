import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>DSA synth umami asymmetrical hexagon</h2>
            <p>
              Praxis poke retro squid art party affogato, bitters hashtag
              raclette meditation offal sartorial. Stumptown hoodie slow-carb,
              messenger bag portland craft beer umami adaptogen cray selvage
              gastropub.
            </p>
            <p>
              Yuccie helvetica subway tile, butcher whatever brooklyn street art
              pok pok austin williamsburg chartreuse venmo polaroid try-hard
              hammock.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>

          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bottle"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Take a look at our featured recipes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
