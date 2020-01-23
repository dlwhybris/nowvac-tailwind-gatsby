import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageCarousel from "../components/ImageCarousel"
import ProductOrderCard from "../components/product/ProductOrderCard"
import ProductInfoTab from "../components/product/ProductInfoTab"

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
        </div>
      </main>
    </Layout>
  )
}

export default ProductDetailPage
