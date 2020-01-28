import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ImageCarousel from "../components/carousel/ImageCarousel"
import ProductOrderCard from "../components/product/ProductOrderCard"
import ProductInfoTab from "../components/product/ProductInfoTab"
import ProductSpecifications from "../components/product/ProductSpecifications"
import StoryCarousel from "../components/carousel/StoryCarousel"
import RelatedProductsCarousel from "../components/carousel/RelatedProductsCarousel"
import ProductReviews from "../components/product/ProductReviews"

const ProductDetailPage = location => {
  return (
    <Layout location={location}>
      <SEO title="Product Detail" />
      <main className="w-full text-gray-900 antialiased">
        {/* Create a Generic Carousel that works for most */}
        <div className="flex flex-row w-10/12 m-auto">
          <ImageCarousel />
          <ProductOrderCard />
        </div>

        <div className="flex flex-row w-10/12 m-auto">
          <ProductInfoTab />
          <ProductSpecifications />
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

export default ProductDetailPage
