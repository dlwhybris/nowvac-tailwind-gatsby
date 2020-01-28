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
  const { data, location, pageContext } = props
  const { powertoolsProduct: product } = data
  return (
    <Layout location={location} title="Product Detail Page">
      <SEO title={product.name} />

      <main className="w-full text-gray-900 antialiased">
        {/* Create a Generic Carousel that works for most */}
        <div className="flex flex-row w-10/12 m-auto">
          <ImageCarousel images={product.images} />
          <ProductOrderCard product={product} />
        </div>

        <div className="flex flex-row w-10/12 m-auto">
          <ProductInfoTab product={product} />
          <ProductSpecifications product={product} />
        </div>

        <StoryCarousel />

        <div className="bg-gray-200">
          <RelatedProductsCarousel />
        </div>

        <ProductReviews
          reviews={product.reviews}
          productCode={pageContext.code}
        />
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
      reviews {
        rating
        date(formatString: "DD MMMM YYYY", locale: "nl")
        comment
        headline
        principal {
          name
        }
      }
      images {
        format
        imageType
        url
      }
    }
  }
`
