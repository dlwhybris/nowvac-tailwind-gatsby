import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Hero from "../components/Hero"
// import VendorCarousel from "../components/VendorCarousel"
// import Recommendations from "../components/Recommendations"
// import VideoBlock from "../components/VideoBlock"
// import StoryCarousel from "../components/StoryCarousel"
// import ContactBlock from "../components/ContactBlock"
import ImageCarousel from "../components/imageCarousel"
import ProductOrderCard from "../components/ProductOrderCard"

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
        {/* <Recommendations /> */}

        {/* <Hero />
        <VendorCarousel />
        <Recommendations />
        <VideoBlock />
        <StoryCarousel />
        <ContactBlock /> */}
      </main>
    </Layout>
  )
}

export default ProductDetailPage
