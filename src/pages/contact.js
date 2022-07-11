import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>{" "}
            <p>
              Cold-pressed locavore beard tilde art party bicycle rights,
              mixtape enamel pin. Subway tile next level authentic viral banh mi
              bespoke direct trade vape scenester swag intelligentsia hot
              chicken man braid irony kinfolk.
            </p>
            <p> YOLO viral four loko quinoa messenger bag enamel pin.</p>
            <p>
              Shaman put a bird on it hella authentic chicharrones, chillwave
              glossier helvetica kinfolk bitters disrupt meggings seitan. Praxis
              deep v try-hard offal, pinterest XOXO authentic jianbing gastropub
              hella literally copper mug.
            </p>
          </article>

          <article>
            <form
              className="form contact-from"
              action="https://formspree.io/f/mvoljwqv"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
