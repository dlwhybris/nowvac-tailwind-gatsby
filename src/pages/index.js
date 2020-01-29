import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import VendorCarousel from "../components/carousel/VendorCarousel"
import Recommendations from "../components/Recommendations"
import VideoBlock from "../components/VideoBlock"
import StoryCarousel from "../components/carousel/StoryCarousel"
import ContactBlock from "../components/ContactBlock"

const IndexPage = location => {
  return (
    <Layout location={location}>
      <SEO title="Homepage" />
      <main className="w-full text-gray-900 antialiased">
        <Hero />
        <div className="hidden xl:block">
          <VendorCarousel />
        </div>
        <Recommendations />
        <VideoBlock />
        <div className="hidden xl:block">
          <StoryCarousel />
        </div>
        <ContactBlock />
      </main>
    </Layout>
  )
}

export default IndexPage
