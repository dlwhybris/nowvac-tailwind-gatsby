import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetailTemplate = props => {
  const { data, location } = props
  const { powertoolsProduct: product } = data

  return (
    <Layout location={location} title="Product Detail Page">
      <SEO title={product.name} />

      <div className="xl:w-10/12 mx-2 xl:mx-auto">
        <h1>Product detail page for {product.name}</h1>
        <pre>{JSON.stringify(product, null, 4)}</pre>
      </div>
    </Layout>
  )
}

export default ProductDetailTemplate

export const pageQuery = graphql`
  query PowertoolsProductByCode($code: String!) {
    powertoolsProduct(code: { eq: $code }) {
      name
      summary
      description
      price {
        formattedValue
      }
      stock {
        stockLevelStatus
      }
      classifications {
        features {
          name
        }
      }
    }
  }
`
