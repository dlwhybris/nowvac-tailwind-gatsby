import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetailTemplate = props => {
  const { data, location, pageContext } = props
  const { powertoolsProduct } = data
  const { code } = pageContext

  return (
    <Layout location={location} title="Product Detail Page">
      <SEO title="404: Not Found" />

      <div className="xl:w-10/12 mx-2 xl:mx-auto">
        <h1>Product detail page for {code}</h1>
      </div>
    </Layout>
  )
}

export default ProductDetailTemplate

export const pageQuery = graphql`
  query PowertoolsProductByCode($code: String!) {
    powertoolsProduct(code: { eq: $code }) {
      name
    }
  }
`
