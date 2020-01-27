import React from "react"
import { graphql } from "gatsby"

import ProductDetailPage from "../pages/product-detail"

const ProductDetailTemplate = props => {
  const { data, location } = props
  const { powertoolsProduct: product } = data
  return (
    <>
      <ProductDetailPage location={location} product={product} />
    </>
  )
}

export default ProductDetailTemplate

export const pageQuery = graphql`
  query PowertoolsProductByCode($code: String!) {
    powertoolsProduct(code: { eq: $code }) {
      name
      summary
      description
      stock {
        stockLevelStatus
      }
      price {
        formattedValue
      }
      images {
        format
        imageType
        url
      }
    }
  }
`
