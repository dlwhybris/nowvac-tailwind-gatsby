import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ImageCarousel from "../components/carousel/ImageCarousel"
import ProductOrderCard from "../components/product/ProductOrderCard"
import ProductInfoTab from "../components/product/ProductInfoTab"
import ProductSpecifications from "../components/product/ProductSpecifications"
import StoryCarousel from "../components/carousel/StoryCarousel"
import RelatedProductsCarousel from "../components/carousel/RelatedProductsCarousel"
import ProductReviews from "../components/product/review/ProductReviews"

const ProductDetailTemplate = props => {
  const { data, location } = props
  const { powertoolsProduct: product } = data
  return (
    <Layout location={location} title="Product Detail Page">
      <SEO title={product.name} />

      <main className="w-full text-gray-900 antialiased">
        {/* Create a Generic Carousel that works for most */}
        <div className="flex flex-row-reverse md:flex-row flex-wrap md:flex-no-wrap w-11/12 lg:w-10/12 m-auto">
          <ImageCarousel images={product.images} />
          <ProductOrderCard product={product} />
        </div>

        <div className="flex flex-row flex-wrap md:flex-no-wrap w-11/12 lg:w-10/12 m-auto mt-20">
          <ProductInfoTab product={product} />
          <ProductSpecifications product={product} />
        </div>

        <StoryCarousel />

        <div className="bg-gray-200">
          <RelatedProductsCarousel />
        </div>

        <ProductReviews />
      </main>
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
